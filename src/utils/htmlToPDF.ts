import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';
const A4Width = 592.28;
const A4Height = 841.89;

/**
 * @description 导出PDF文件，暂时支持单页
 * @param {string} resumeName 导出文件名
 */
const toPrintPdf = (resumeName?: string) => {

  const name = resumeName || '未命名文件';
  const dom: HTMLElement | any = document.querySelector('#visPdf');
  if (dom) {
    html2canvas(dom, {
      allowTaint: true,   // 允许图片跨域
      scale: 6,           // 缩放比 1-12
      useCORS: true,      // 允许加载跨域图片
      tainttest: true,    // 检查所有图片加载完成
      logging: true,      // 日志开关
    }).then((canvas) => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      // 一页pdf显示html页面生成的canvas高度，等比缩放
      const pageHeight = (contentWidth / A4Width) * A4Height;
      // 未生成pdf时html页面的高度
      let leftHeight = contentHeight;
      // 页面偏移
      let position = 0;
      // 页面生成canvas在pdf中的高度
      const imgWidth = A4Width;
      const imgHeight = (A4Width / contentWidth) * contentHeight;
      const pageData = canvas.toDataURL('image/jpeg', 1.0);
      // a4纸纵向
      const PDF = new JsPdf('portrait', 'pt', 'a4');
      // 当内容未超过一页时，无需分页
      if (leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        // 超过一页，分页
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= A4Height;
          if (leftHeight > 0) {
            PDF.addPage();
          }
        }
      }
      PDF.save(name + '.pdf');
    }).catch(error => {
      console.log(error);
    })
  }
}

export default toPrintPdf;
