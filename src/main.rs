use std::env;
use std::fs::File;
use std::process::exit;
use donut::Donut;

fn main() -> donut::Result {
    let args: Vec<String> = env::args().collect();

    if args.len() < 2 || args.len() > 3 {
        println!("Usage: donut input [output]");
        exit(1);
    }

    let mut input = File::open(&args[1])?;
    let len = input.metadata()?.len();

    if len > 1_000_000 {
        let mb = len / 1_000_000;
        println!("File passed of length {}MB", mb);
    } else {
        println!("File passed of length {} bytes", len);
    }

    println!("Processing file...");
    let donut = Donut::generate_from_reader(&mut input)?;

    let mut output_path = "../donut.png";
    if args.len() > 2 {
        output_path = &args[2];
    }

    println!("Rendering...");
    let img = donut.render()?;

    println!("Saving...");
    img.save(output_path)?;

    println!("Algorithm ran to completion");
    println!("Donut written to {}", output_path);

    Ok(())
}
