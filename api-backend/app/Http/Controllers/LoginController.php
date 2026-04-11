<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Traits\ApiResponseTrait;

class LoginController extends Controller
{
    use ApiResponseTrait;
    public function store(UserRequest $request){
        $request->authenticate();
        $user = $request->user();
        $token = $user->createToken('auth_token')->plainTextToken;
        $data = [
            'user_type' => $user->user_type,
            'token' => $token
        ];
        
        return $this->success("Login Successful!", $data);
    }
}