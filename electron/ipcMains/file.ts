import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
    // 读取文件
    read: (path: string, encoding?: BufferEncoding): Promise<string> => {
        return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
    },
    // 写入文件
    write: (path: string, content: string, encoding?: BufferEncoding): Promise<void> => {
        return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf8' });
    },
    // 重命名
    rename: (oldPath: string, newPath: string) => {
        return fsPromiseAPIs.rename(oldPath, newPath);
    },
    // 删除文件
    delete: (path: string) => {
        return fsPromiseAPIs.unlink(path);
    },
    // 是否存在文件
    hasFile: (path: string) => {
        return fsPromiseAPIs.access(path, fs.constants.F_OK);
    },
    // 是否可写
    canWrite: (path: string) => {
        return fsPromiseAPIs.access(path, fs.constants.W_OK);
    },
    // 是否可读
    canRead: (path: string) => {
        return fsPromiseAPIs.access(path, fs.constants.R_OK);
    },
    // 读取文件夹下所有文件
    readDir: (path: string): Promise<string[]> => {
        return fsPromiseAPIs.readdir(path);
    },
};

export default fileAction;
