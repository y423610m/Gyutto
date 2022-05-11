use actix_web::{get, web, Result, App, HttpResponse, HttpServer, ResponseError};
use thiserror::Error;
use serde::{Deserialize, Serialize};

#[derive(Error, Debug)]
enum MyError{}
impl ResponseError for MyError{}

#[derive(Deserialize)]
pub struct RequestBody {
    id: i32,
}

#[derive(Serialize)]
pub struct ResponseBody {
    message: String,
}

// // APIハンドラ
// // 以下の例ではここを書き換えてレスポンスを変化させていきます
async fn index_apj() -> actix_web::Result<HttpResponse> {
    let message = format!("aaaa{}",1);
    print!("index_apj");
    println!("{}",message);
    Ok(HttpResponse::Ok().json(ResponseBody {
        message
    }))
}

async fn index_api(request_body: web::Json<RequestBody>) -> actix_web::Result<HttpResponse> {
    let message = format!("私のIDは{}です", request_body.id);
    print!("index_api");
    Ok(HttpResponse::Ok().json(ResponseBody {
        message
    }))
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {

    //print!("start rust 8080");

    HttpServer::new(|| {
        App::new()
            .service(index)
        // ここでハンドラとエンドポイントを対応付け
            .route("/api", web::post().to(index_api))
            .route("/apj", web::post().to(index_apj))
    })
    .bind("localhost:8080")?
    .run()
    .await
}

#[get("/")]
async fn index()->Result<HttpResponse, actix_web::Error>{
    let response_body = "
Hello world!
What is your name?
I'm mori
    ";
    print!("index");
    Ok(HttpResponse::Ok().body(response_body))

}



// #[actix_rt::main]
// async fn main()->Result<(), actix_web::Error>{

//     HttpServer::new(move || App::new().service(index))
//         .bind("0.0.0.0:8080")?
//         .run()
//         .await?;

//     Ok(())

// }


