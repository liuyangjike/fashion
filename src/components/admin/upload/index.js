import React from 'react'
import './upload.css'
const OSS  = require('ali-oss')

export default class Upload extends React.Component{
  constructor () {
    super()
    this.state = {
      showImg: 'https://fashion-2.oss-cn-shanghai.aliyuncs.com/%E4%B8%8A%E4%BC%A0.png'
    }
  }
  componentDidMount () {
  }

  aliyunUpload = async (file) => {
    let client = new OSS({
      region: 'oss-cn-shanghai',  // bucket所在的区域
      //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
      accessKeyId: 'LTAI9ZTsqY4YhlBh',
      accessKeySecret: 'EKiAFIZGbLDjPLju9h3hBilT1aTdwX',
      bucket: 'fashion-2'  // bucket实例名称
    });
    try {
      const imgName = Date.now().toString()
      // object表示上传到OSS的Object名称，localfile表示本地文件或者文件路径
      let {url, name} = await client.put(imgName, file);
      this.setState({
        showImg: url,
        data: {url, name}
      })
      return {url, name}
    } catch(e) {
      console.error('error: %j', e);
    }
  }
  upload = () => {
    var fileData = new FormData()
    fileData.append('img', this.input.files[0])
    var file = this.input.files[0]
    this.aliyunUpload(file)
  }
  sendFile = () => {
    const { onSend, type, year } = this.props
    onSend({...this.state.data, type, year})
  }
  render () {
    const { showImg } = this.state
    return (
      <div className="up-container">
        <form encType='multipart/form-data' className="form"  name='file' >
          <input type="file" onChange={this.upload} name="file" className='upload' id="" ref={e => this.input = e}/>
          <div className='icon' style={{backgroundImage: `url(${showImg})`}}></div>
        </form>
        <div onClick={this.sendFile} className='button'>上传</div>
      </div>
    )
  }
}