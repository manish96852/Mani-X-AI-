use actix_cors::Cors;
use actix_web::{web, App, HttpServer, Result, HttpResponse, middleware::Logger};
use serde_json::json;

// Simple health check endpoint
async fn health() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(json!({
        "status": "ok",
        "message": "MANI X AI Backend is running"
    })))
}

// Mock vaults endpoint
async fn get_vaults() -> Result<HttpResponse> {
    let response = json!([
        {
            "address": "0x9f65606cd61b4ea79321eccae8f19d780cf60be2",
            "pool": {
                "address": "0x123...",
                "token0": {
                    "address": "0x0000000000000000000000000000000000003ad2",
                    "name": "Hedera",
                    "symbol": "HBAR",
                    "decimals": 18,
                    "is_native_wrapper": true
                },
                "token1": {
                    "address": "0x456...",
                    "name": "USD Coin",
                    "symbol": "USDC",
                    "decimals": 6,
                    "is_native_wrapper": false
                },
                "fee": 3000,
                "tick_spacing": 60,
                "current_tick": 0,
                "sqrt_price_x96": "79228162514264337593543950336",
                "price1": 1.0,
                "price0": 0.05
            },
            "name": "MANI X AI Vault",
            "symbol": "MXV",
            "decimals": 18,
            "total_supply": 1000000.0,
            "lower_tick": -887220,
            "upper_tick": 887220,
            "is_active": true,
            "tvl": {
                "tvl0": 1000.0,
                "tvl1": 5000.0
            },
            "position": {
                "tick_lower": -887220,
                "tick_upper": 887220,
                "liquidity": 1000000,
                "amount0": 500.0,
                "amount1": 2500.0,
                "fees0": 10.0,
                "fees1": 50.0
            }
        }
    ]);
    
    Ok(HttpResponse::Ok().json(response))
}

// Mock chat endpoint
async fn chat() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(json!({
        "response": "Hello! I'm the MANI X AI assistant. How can I help you today?"
    })))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    println!("🚀 Starting MANI X AI Backend on http://127.0.0.1:8090");

    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_origin("http://127.0.0.1:3000")
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
            .allowed_headers(vec!["Content-Type", "Authorization"])
            .max_age(3600);

        App::new()
            .wrap(cors)
            .wrap(Logger::default())
            .route("/health", web::get().to(health))
            .route("/vaults", web::get().to(get_vaults))
            .route("/chat", web::post().to(chat))
            .route("/", web::get().to(|| async {
                HttpResponse::Ok().json(json!({
                    "name": "MANI X AI",
                    "version": "0.1.0",
                    "status": "running"
                }))
            }))
    })
    .bind("127.0.0.1:8090")?
    .run()
    .await
}
