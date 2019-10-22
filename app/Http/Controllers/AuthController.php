<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterFormRequest $request)
    {
        $params = $request->only('email', 'name', 'password');
        if (User::checkUserExisted($params['email'])) {
            return response()->json([
                "success" => "false",
                "msg" => "Account already exists",
            ]);
        }
        $user = new User();
        if ($user->checkUserExisted) {
            $user->email = $params['email'];
        }

        $user->name = $params['name'];
        $user->password = bcrypt($params['password']);
        $user->save();

        return response()->json([
            "success" => "true",
            "msg" => "Create account successfully",
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!($token = JWTAuth::attempt($credentials))) {
            return response()->json([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.',
            ], Response::HTTP_BAD_REQUEST);
        }

        return response()->json(['token' => $token], Response::HTTP_OK);
    }

    public function user(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            return response($user, Response::HTTP_OK);
        }

        return response(null, Response::HTTP_BAD_REQUEST);
    }

    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $this->validate($request, ['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json('You have successfully logged out.', Response::HTTP_OK);
        } catch (JWTException $e) {
            return response()->json('Failed to logout, please try again.', Response::HTTP_BAD_REQUEST);
        }
    }

    public function refresh()
    {
        return response(JWTAuth::getToken(), Response::HTTP_OK);
    }
}
