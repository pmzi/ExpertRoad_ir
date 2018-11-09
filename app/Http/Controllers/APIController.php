<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscribe;

class APIController extends Controller
{
    //

    public function subscribe(Request $request){

        $email = trim($request->email);
        if(preg_match('/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/',$email)){
            if(count(Subscribe::where('email',$email)->get())==0){
                $time = time();
                Subscribe::create(['email'=>$email, 'time'=>$time]);
                return response()->json(['status'=>1]);
            }else{
                // exists
                return response()->json(['status'=>-1]);
            }
        }else{
            // not valid
            return response()->json(['status'=>-2]);
        }

    }

}
