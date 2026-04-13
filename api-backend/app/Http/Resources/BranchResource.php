<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BranchResource extends JsonResource
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
            "branch_name"=> $this->first_name,
            "branch_location"=> $this->last_name,
            "created_at" => $this->created_at,
            "partner" => new PartnerResource($this->whenLoaded('partner'))
        ];
    }
}