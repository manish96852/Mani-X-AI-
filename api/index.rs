use serde_json::json;
use vercel_runtime::{run, Body, Error, Request, RequestExt, Response};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(req: Request) -> Result<Response<Body>, Error> {
    let path = req.uri().path();
    
    match path {
        "/api/health" => {
            let response = json!({
                "status": "ok",
                "message": "MANI X AI Backend is running on Vercel"
            });
            Ok(Response::builder()
                .status(200)
                .header("content-type", "application/json")
                .body(response.to_string().into())?)
        }
        "/api/vaults" => {
            let response = json!([
                {
                    "address": "0x9f65606cd61b4ea79321eccae8f19d780cf60be2",
                    "name": "MANI X AI Vault",
                    "symbol": "MXV",
                    "tvl": {
                        "tvl0": 1000.0,
                        "tvl1": 5000.0
                    }
                }
            ]);
            Ok(Response::builder()
                .status(200)
                .header("content-type", "application/json")
                .body(response.to_string().into())?)
        }
        "/api/v1/chat" => {
            let response = json!({
                "response": "Hello! I'm your MANI X AI assistant running on Vercel!"
            });
            Ok(Response::builder()
                .status(200)
                .header("content-type", "application/json")
                .body(response.to_string().into())?)
        }
        _ => {
            Ok(Response::builder()
                .status(404)
                .body("Not Found".into())?)
        }
    }
}
