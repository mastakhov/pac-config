'use strict';
/*jshint esversion: 6 */

function FindProxyForURL(url, hostname) {

  const PROXY = 'SOCKS5 localhost:10808;';
  const DIRECT = 'DIRECT';
  
  let proxiedDomains = [
    '.bungie.net',
    '.destinyitemmanager.com',
    '.youtube.com',
    '.googlevideo.com',
  ];

  for (const proxiedDomain of proxiedDomains) {
    if (dnsDomainIs(hostname, proxiedDomain)) {
      return PROXY;
    }
  }
  return DIRECT;
}
