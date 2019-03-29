export function chunk(options, progress) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    const method = options.method || "get";
    request.open(method.toUpperCase(), options.url, true);
    request.timeout = 30 * 60 * 1000;
    if (options.headers) {
      for (const header in options.headers) {
        request.setRequestHeader(header, options.headers[header]);
      }
    }

    request.onprogress = function() {
      if (request.readyState === 4) {
        resolve(request.responseText);
        request = null;
      } else if (request.readyState === 3) {
        progress(request.responseText);
      }
    };
    request.onerror = function() {
      reject("Network Error");
      request = null;
    };
    request.send();
  });
}
