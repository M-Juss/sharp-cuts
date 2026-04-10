<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use App\Traits\ApiResponseTrait;
use App\Models\Client;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ClientResource;
use App\Services\ClientServices;

class ClientController extends Controller
{
    use ApiResponseTrait;

    public function __construct(
        protected ClientServices $clientService
    ) {}

    public function index()
    {
        $clients = Client::with('user')
            ->whereHas('user', fn($q) => $q->where('user_type', 'client'))
            ->paginate(15);

        return $this->success('Clients retrieved successfully.', ClientResource::collection($clients));
    }

    public function store(ClientRequest $request)
    {
        try {
            $client = $this->clientService->create($request->validated());

            return $this->created('Client created successfully!', new ClientResource($client->load('user')));

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create client.',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }

    public function show(Client $client)
    {
        abort_if(Auth::id() != $client->user_id, 403, 'Access Forbidden');

        return $this->success('Success showing client info.', new ClientResource($client->load('user')));
    }

    public function update(ClientRequest $request, Client $client)
    {
        abort_if(Auth::id() != $client->user_id, 403, 'Access Forbidden');

        try {
            $updated = $this->clientService->update($client, $request->validated());

            return $this->success('Client updated successfully.', new ClientResource($updated));

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create client.',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy(Client $client)
    {
        abort_if(Auth::id() != $client->user_id, 403, 'Access Forbidden');

        try {
            $this->clientService->delete($client);

            return $this->noData('Client deleted successfully.');

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create client.',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
}