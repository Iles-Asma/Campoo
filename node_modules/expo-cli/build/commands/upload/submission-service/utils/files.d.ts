import Request from 'got/dist/source/core';
declare function createDownloadStream(url: string): Request;
declare function pathIsTar(path: string): boolean;
declare function downloadAppArchiveAsync(url: string): Promise<string>;
declare function uploadAppArchiveAsync(path: string): Promise<string>;
declare function extractLocalArchiveAsync(filePath: string): Promise<string>;
export { createDownloadStream, downloadAppArchiveAsync, extractLocalArchiveAsync, pathIsTar, uploadAppArchiveAsync, };
