<?php

namespace App\Services;

use App\Models\User;
use App\Models\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ClientServices
{
    public function create(array $data): Client
    {
        return DB::transaction(function () use ($data) {
            $user = User::create([
                'email'     => $data['email'],
                'password'  => Hash::make($data['password']),
                'user_type' => 'client',
            ]);

            return Client::create([
                'user_id'        => $user->id,
                'first_name'     => $data['first_name'],
                'last_name'      => $data['last_name'],
                'contact_number' => $data['contact_number'],
            ]);
        });
    }

    public function update(Client $client, array $data): Client
    {
        return DB::transaction(function () use ($client, $data) {

            // update User table fields if present
            $client->user->update(array_filter([
                'email'    => $data['email'] ?? null,
                'password' => isset($data['password'])
                                ? Hash::make($data['password'])
                                : null,
            ]));

            // update Client table fields
            $client->update(array_filter([
                'first_name'     => $data['first_name'] ?? null,
                'last_name'      => $data['last_name'] ?? null,
                'contact_number' => $data['contact_number'] ?? null,
            ]));

            return $client->fresh('user');
        });
    }

    public function delete(Client $client): void
    {
        DB::transaction(function () use ($client) {
            $client->delete();
            $client->user->delete(); // remove orphaned User record
        });
    }
}