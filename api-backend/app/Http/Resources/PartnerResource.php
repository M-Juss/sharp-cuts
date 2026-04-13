<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PartnerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "first_name"=> $this->first_name,
            "last_name"=> $this->last_name,
            "contact_number"=> $this->contact_number,
            "status"=> $this->status,
            "created_at" => $this->created_at,
            "user" => new UserResource($this->whenLoaded('user')),
        ];
    }
}