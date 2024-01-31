import React,{useEffect, useState} from "react";
import '../css/header.css';
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // 添加滚动监听
    window.addEventListener('scroll', handleScroll);

    // 清除事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <header className="netflix-header">
          <div className="header-logo">HappyLearner</div>
          <nav className="header-nav">
            {/* 导航项 */}
          </nav>
          <div className="header-user">
            {/* 用户相关的元素，比如搜索、账户图标等 */}
          </div>
        </header>
      );
  };