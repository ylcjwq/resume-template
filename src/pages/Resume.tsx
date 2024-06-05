const Resume = ()=> {
    window.electron.ipcRenderer.send('fileRead','./src/App.tsx')
    window.electron.ipcRenderer.on('fileReadReply',(_, data) => {
        console.log(data)
    })
    console.log(import.meta.url)
    console.log(window.electron)
    return <div>我是简历模块</div>;
}
export default Resume;