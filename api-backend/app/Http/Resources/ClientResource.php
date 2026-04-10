<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "user_id"=> $this->user_id,
            "first_name"=> $this->first_name,
            "last_name"=> $this->last_name,
            "contact_number"=> $this->contact_number,
            "user" => new UserResource($this->whenLoaded('user'))
        ];
    }
}