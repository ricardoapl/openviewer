<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Dashboard</h1>
        <p>Summary of all services running on your "bla ba lba" project</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
             <div class="mt-2">
                <svg class="bi bi-exclude text-primary" width="3.5em" height="3.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12H4v2.5A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4H12V1.5A1.5 1.5 0 0010.5 0h-9zM12 4H5.5A1.5 1.5 0 004 5.5V12h6.5a1.5 1.5 0 001.5-1.5V4z" clip-rule="evenodd"/>
                </svg>
                <p class="mt-2 lead">Instances</p>
            </div>
              <p class="display-1">10</p>
              <p class="card-text ">The number of instances running on this project.</p>
              <a href="#" class="btn btn-primary">See Instances</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
         <div class="card text-center">
            <div class="card-body">
             <div class="mt-2">
               <svg class="bi bi-puzzle-fill text-success" width="3.5em" height="3.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3.112 3.645A1.5 1.5 0 014.605 2H7a.5.5 0 01.5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 00-.115.118.113.113 0 00-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 00.27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 00.271-.194.213.213 0 00.036-.054l.003-.01v-.008a.112.112 0 00-.012-.025.459.459 0 00-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 019 2h2.395a1.5 1.5 0 011.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0111.395 14H9a.5.5 0 01-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 00.115-.118.113.113 0 00.012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 00-.036-.053.859.859 0 00-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 00-.271.194.214.214 0 00-.036.054l-.003.01v.002l.001.006a.113.113 0 00.012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 01-.5.5H4.605a1.5 1.5 0 01-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z" clip-rule="evenodd"/>
                </svg>
                <p class="mt-2 lead">Images</p>
            </div>
              <p class="display-1">10</p>
              <p class="card-text ">The number of Imagens upload on this project.</p>
              <a href="#" class="btn btn-success">See Images</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
             <div class="mt-2">
                <svg class="bi bi-bucket-fille text-warning" width="3.5em" height="3.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42z" clip-rule="evenodd"/>
                </svg>
                <p class="mt-2 lead">Volumes</p>
            </div>
              <div>
                <span class="display-1 d-inline">10</span>
                <span class="text-muted d-inline"> GB</span>
              </div>
              <p class="card-text ">The number of volumes used on this project.</p>
              <a href="#" class="btn btn-warning">See Volumes</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm">
            <div class="card text-center">
              <div class="card-body">
              <div class="mt-2">
                  <svg class="bi bi-pie-chart-fill text-danger" width="3.5em" height="3.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0013.277-5.5zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 008.5.015z"/>
                  </svg>
                  <p class="mt-2 lead">Volumes Size</p>
              </div>
                <p class="display-1">10</p>
                <p class="card-text ">The total volumes size used in this project.</p>
                <a href="#" class="btn btn-danger">See Volumes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
