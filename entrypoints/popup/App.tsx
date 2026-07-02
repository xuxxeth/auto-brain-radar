import logo from '@/assets/brand/chezhileida-logo.svg';
import './App.css';

function App() {
  return (
    <main className="app">
      <header className="brand">
        <img src={logo} className="brand-logo" alt="车智雷达 logo" />
        <div>
          <h1>车智雷达</h1>
          <p>AutoBrain Radar</p>
        </div>
      </header>

      <section className="panel">
        <h2>插件状态</h2>
        <ul>
          <li>当前模式：登录态页面采集</li>
          <li>支持站点：懂车帝（优先）</li>
          <li>输出链路：采集 -> 清洗 -> 评分 -> 导出</li>
        </ul>
      </section>

      <section className="panel">
        <h2>使用建议</h2>
        <ol>
          <li>先在目标站点完成登录与验证码</li>
          <li>在列表页点击插件进行采集</li>
          <li>回到后端接口查看预览或导出 Excel</li>
        </ol>
      </section>
    </main>
  );
}

export default App;
