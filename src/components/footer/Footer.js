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
      <div class="my-3"><a class="mr-4" href="https://help.cointracker.io" target="_blank" rel="noopener noreferrer">help.cointracker.io</a></div>
      </div>
      <div class="col-6 col-lg offset-lg-1 my-4">
      <div class="mb-3 header">Platform</div>
      <div class="my-2"><a href="/tax/plans">Pricing</a></div>
      <div class="my-2"><a href="/bitcoin-taxes">Crypto Tax Guide</a></div>
      <div class="my-2"><a href="/price">Crypto Prices</a></div>
      <div class="my-2"><a href="/stats">Crypto Stats</a></div>
      </div>
      <div class="col-6 col-lg my-4">
      <div class="mb-3 header">Resources</div>
      <div class="my-2"><a class="mr-4" href="/security">Security</a></div>
      <div class="my-2">
      <div class="d-flex mr-4">
      <a class="my-auto" href="https://angel.co/cointracker/jobs" target="_blank" rel="noopener noreferrer">Careers</a>
      <span class="badge badge-warning my-auto ml-3">We're hiring</span>
      </div>
      </div>
      <div class="my-2">
      <a class="mr-4" href="https://www.keyvalues.com/cointracker" target="_blank" rel="noopener noreferrer">Our Culture</a>
      </div>
      <div class="my-2"><a class="mr-4" href="/about">About</a></div>
      </div>
      <div class="col-6 col-lg my-4">
      <div class="mb-3 header">Mobile</div>
      <div class="my-2"><a href="https://itunes.apple.com/us/app/cointracker-crypto-portfolio/id1401499763?mt=8" target="_blank" rel="noopener noreferrer">iOS</a></div>
      <div class="my-2"><a href="https://play.google.com/store/apps/details?id=io.cointracker.android" target="_blank" rel="noopener noreferrer">Android</a></div>
      </div>
      <div class="col-6 col-lg my-4">
      <div class="mb-3 header">Social</div>
      <div class="my-2"><a href="https://blog.cointracker.io" target="_blank" rel="noopener noreferrer">Blog</a></div>
      <div class="my-2"><a href="http://t.me/cointracker_io" target="_blank" rel="noopener noreferrer">Telegram</a></div>
      <div class="my-2"><a href="https://www.reddit.com/r/cointracker" target="_blank" rel="noopener noreferrer">Reddit</a></div>
      <div class="my-2"><a href="https://twitter.com/cointracker_io" target="_blank" rel="noopener noreferrer">Twitter</a></div>
      <div class="my-2"><a href="https://www.facebook.com/cointracker" target="_blank" rel="noopener noreferrer">Facebook</a></div>
      </div>
      </div>
      <div class="d-flex flex-wrap py-5">
      <div class="my-3 mr-auto pr-5 text-nowrap">© CoinTracker 2019</div>
      <div class="my-3 d-flex">
      <a href="/privacy">Privacy</a>
      <div class="mx-2">·</div>
      <a href="/terms">Terms</a>
      <div class="mx-2">·</div>
      <a href="/disclaimer">Disclaimer</a>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
