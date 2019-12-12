<?php

namespace App\Http\Middleware;

use Closure;

class RankPosition
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $rank = array(
            "Chairman" => 1,
            "CEO" => 2,
            "CTO" => 3,
            "COO" => 4,
            "CFO" => 5,
            "Director" => 6,
            "Manager" => 7,
            "Staff" => 8,
        );
        $request['rank'] = $rank[$request['position']];
        return $next($request);
    }
}
