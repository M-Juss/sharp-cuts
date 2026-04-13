<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Partner extends Model
{
    /** @use HasFactory<\Database\Factories\PartnerFactory> */
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'contact_number',
        'status'
    ];
    
    
    public function user(): BelongsTo {
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function branches(): HasMany {
        return $this->hasMany(Branches::class, 'partner_id');
    }
    
}