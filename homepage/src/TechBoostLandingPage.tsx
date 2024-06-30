import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Menu, Users, Briefcase, Lightbulb, Code, FileText, Handshake, BarChart, Shield, Clock } from 'lucide-react';
import mockup01 from './images/mockup01.png';

interface CountUpAnimationProps {
  end: number;
  duration: number;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * end));
      if (progressRatio < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const TechBoostLandingPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 text-gray-800">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">レイデザイン</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="hover:text-pink-200">サービス</a>
            <a href="#value" className="hover:text-pink-200">付加価値</a>
            <a href="#pricing" className="hover:text-pink-200">料金</a>
            <a href="#contact" className="hover:text-pink-200">お問い合わせ</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-indigo-500 text-white p-4">
          <a href="#services" className="block py-2">サービス</a>
          <a href="#value" className="block py-2">付加価値</a>
          <a href="#pricing" className="block py-2">料金</a>
          <a href="#contact" className="block py-2">お問い合わせ</a>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-indigo-800">あなたのアイデアを形に</h2>
          <p className="text-xl mb-8 text-indigo-600">最短３日で納品！Webアプリケーションのモック作成承ります。</p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:from-pink-600 hover:to-purple-600 transition duration-300">
            問い合わせする <ArrowRight className="inline ml-2" />
          </button>
        </section>

        <section id="services" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-indigo-800">主なサービス</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'ヒアリング・カウンセリング',
                description: 'ビジネスアイディアや目標についての詳細なヒアリングと、アイディアのブラッシュアップをサポートします。'
              },
              {
                title: 'Webアプリケーションの設計',
                description: '実現したい機能やユーザー体験について詳細なヒアリングを行い、必要な機能リストと技術要件を定義します。'
              },
              {
                title: 'モック作成とアドバイス',
                description: 'インタラクティブなプロトタイプを作成し、事業企画書作成のアドバイスを提供します。'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="text-pink-500 mb-4" size={32} />
                <h4 className="text-xl font-semibold mb-2 text-indigo-700">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="value" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-indigo-800">付加価値サービス</h3>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Handshake className="text-indigo-600 mb-4" size={48} />
                <h4 className="text-2xl font-semibold mb-4 text-indigo-700">プレゼンや商談で使うモックの作成</h4>
                <p className="text-gray-600">ユーザーフローやワイヤーフレームの作成、インタラクティブなプロトタイプを作成します。コードで納品しますので、お手元のパソコンやスマホでプロダクトイメージを伝えられます。</p>
              </div>
              <div className="md:w-1/2">
              <img src={mockup01} alt="製品mockup" className="rounded-lg shadow-md w-[50%] h-auto mx-auto" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <BarChart className="text-indigo-600 mb-4" size={48} />
                <h4 className="text-2xl font-semibold mb-4 text-indigo-700">マーケティング戦略のサポート</h4>
                <p className="text-gray-600">初期のマーケティング戦略立案や実行を支援します。市場分析、ターゲット顧客の特定、効果的なマーケティングチャネルの選択など、ビジネスの成長に必要な戦略的なアドバイスを提供します。</p>
              </div>
              <div className="md:w-1/2">
              <img src="https://via.placeholder.com/600x400" alt="マーケティング戦略" className="rounded-lg shadow-md" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <FileText className="text-indigo-600 mb-4" size={48} />
                <h4 className="text-2xl font-semibold mb-4 text-indigo-700">企画書作成のサポート</h4>
                <p className="text-gray-600">クライアント向けのプレゼンテーション準備を支援します。効果的なピッチデッキの作成、説得力のある企画書の構成、データの視覚化など、ビジネスアイデアを魅力的に伝えるためのサポートを提供します。</p>
              </div>
              <div className="md:w-1/2">
                <img src="/api/placeholder/600/400" alt="企画書作成" className="rounded-lg shadow-md" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <Briefcase className="text-indigo-600 mb-4" size={48} />
                <h4 className="text-2xl font-semibold mb-4 text-indigo-700">商談トーク作成のサポート</h4>
                <p className="text-gray-600">クライアント向けの効果的な営業トークの準備を支援します。製品やサービスの価値提案の明確化、想定される質問への回答準備、説得力のあるストーリーテリングなど、成功する商談のためのトレーニングとアドバイスを提供します。</p>
              </div>
              <div className="md:w-1/2">
                <img src="/api/placeholder/600/400" alt="商談トーク作成" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-indigo-800">料金プラン</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'ベーシック', price: '50,000', features: ['ヒアリング・カウンセリング（2時間）', '基本的なアドバイス', 'メールサポート'] },
              { name: 'スタンダード', price: '150,000', features: ['ヒアリング・カウンセリング（5時間）', 'モック作成（1回）', '事業企画書作成アドバイス', 'チャットサポート'] },
              { name: 'プレミアム', price: '300,000', features: ['ヒアリング・カウンセリング（10時間）', 'モック作成（3回まで）', '事業企画書作成アドバイス', '技術パートナー紹介', '24時間サポート'] }
            ].map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold mb-4 text-indigo-700">{plan.name}</h4>
                <p className="text-3xl font-bold mb-4 text-gray-800">¥{plan.price}<span className="text-sm font-normal">/月</span></p>
                <ul className="text-left mb-6 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2"><CheckCircle className="inline text-pink-500 mr-2" size={16} /> {feature}</li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold hover:from-indigo-600 hover:to-blue-600 transition duration-300">
                  選択する
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-indigo-800">お問い合わせ</h3>
          <p className="mb-4 text-gray-600">起業の夢を現実にするお手伝いをさせていただきます。まずは無料相談からどうぞ。</p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:from-pink-600 hover:to-purple-600 transition duration-300">
            無料相談を予約する
          </button>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 レイデザイン. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechBoostLandingPage;
