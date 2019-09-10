import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
      <div id="footer" class="pt-5">
      <div class="container">
      <div class="row justify-content-lg-between mb-5">
      <div class="col-12 col-lg my-4">
      <div class="h5 primary-color">CoinTracker</div>
      <div class="my-3"><a class="mr-4" href="#" target="_blank" rel="noopener noreferrer">help.cointracker.io</a></div>
      </div>
      <div class="col-6 col-lg offset-lg-1 my-4">
      <div class="mb-3 header">Platform</div>
      <div class="my-2"><a href="#">Pricing</a></div>
      <div class="my-2"><a href="#">Crypto Tax Guide</a></div>
      <div class="my-2"><a href="#">Crypto Prices</a></div>
      <div class="my-2"><a href="#">Crypto Stats</a></div>
      </div>
      <div class="col-6 col-lg my-4">
      <div class="mb-3 header">Resources</div>
      <div class="my-2"><a class="mr-4" href="/security">Security</a></div>
      <div class="my-2">
      <div class="d-flex mr-4">
      <a class="my-auto" href="#" target="_blank" rel="noopener noreferrer">Careers</a>
      <span class="badge badge-warning my-auto ml-3">We're hiring</span>
      </div>
      </div>
      <div class="my-2">
      <a class="mr-4" href="#" target="_blank" rel="noopener noreferrer">Our Culture</a>
      </div>
      <div class="my-2"><a class="mr-4" href="/about">About</a></div>
      </div>
      <div class="col-6 col-lg my-4">
      <div class="mb-3 header">Mobile</div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">iOS</a></div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">Android</a></div>
      </div>
      <div class="col-6 col-lg my-4">
      <div class="mb-3 header">Social</div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">Blog</a></div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">Telegram</a></div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">Reddit</a></div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></div>
      <div class="my-2"><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></div>
      </div>
      </div>
      <div class="d-flex flex-wrap py-5">
      <div class="my-3 mr-auto pr-5 text-nowrap">© CoinTracker 2019</div>
      <div class="my-3 d-flex">
      <a href="#">Privacy</a>
      <div class="mx-2">·</div>
      <a href="#">Terms</a>
      <div class="mx-2">·</div>
      <a href="#">Disclaimer</a>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
