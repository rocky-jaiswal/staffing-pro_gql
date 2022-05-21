{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [ 
    nodejs-16_x 
    yarn
  ];

  shellHook = ''
    echo GQL-API
  '';

  NODE_ENV = "development";
}