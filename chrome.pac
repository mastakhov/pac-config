'use strict';

function FindProxyForURL(url, hostname) {

  const PROXY = 'SOCKS5 localhost:10808;';
  const DIRECT = 'DIRECT';
  
  let proxiedDomains = [
    '.bungie.net',
    '.destinyitemmanager.com',
  ];

  for (proxiedDomain of proxiedDomains) {
    if (dnsDomainIs(hostname, proxiedDomain)) {
      return PROXY;
    }
  }
  return DIRECT;
}
