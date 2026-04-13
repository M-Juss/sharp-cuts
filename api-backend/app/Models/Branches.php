<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Branches extends Model
{
    /** @use HasFactory<\Database\Factories\BranchesFactory> */
    use HasFactory;
    
    protected $fillable = [
        'partner_id',
        'branch_name',
        'branch_location'
    ];
    
    public function partner(): BelongsTo{
        return $this->belongsTo(Partner::class, 'partner_id');
    }
}