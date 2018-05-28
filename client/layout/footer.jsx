/**
 * import className from "../assets/styles/footer.styl";注意jsx写法中的关于使用css-loader的module写法来将样式作为变量调用，原理相同，配置文件在css-loader中
 * <div id={className.footer}>
 *
 *
 *
 */
import '../assets/styles/footer.styl'
export default{
  data () {
    return {
      author: 'mr.cc'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
