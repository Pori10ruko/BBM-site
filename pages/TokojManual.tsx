import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SECTIONS = [
  { id: 'cover', label: '表紙' },
  { id: 'concept', label: '作品の狙い' },
  { id: 'roles', label: '役割分担' },
  { id: 'layout', label: '会場レイアウト' },
  { id: 'equipment', label: '機材チェック' },
  { id: 'timeline', label: 'タイムライン' },
  { id: 'runthrough', label: 'ランスルー' },
  { id: 'reference', label: '参考音源' },
  { id: 'rehearsal', label: 'リハ記録' },
  { id: 'cue1', label: 'キュー①' },
  { id: 'cue2', label: 'キュー②' },
  { id: 'cue3', label: 'キュー③' },
  { id: 'audience', label: '観客ガイド' },
  { id: 'filming', label: '撮影・取材' },
  { id: 'trouble', label: 'トラブル対応' },
  { id: 'todo', label: 'ToDo' },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};
const stagger = (d: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: d } });

const Num: React.FC<{ n: number }> = ({ n }) => (
  <span className="inline-block text-amber-500/80 text-[11px] tracking-[0.35em] font-light mb-1">
    {String(n).padStart(2, '0')}
  </span>
);

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 style={{ fontFamily: "'Noto Serif JP', serif" }}
    className="text-[26px] md:text-[34px] font-light tracking-wide text-white/95 mt-2 mb-8 leading-snug">
    {children}
  </h2>
);

const Dash: React.FC = () => <div className="w-10 h-px bg-amber-600/50 my-7" />;

const Aside: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-slate-400/80 text-[11px] mt-6 leading-relaxed border-l-2 border-slate-700/60 pl-4 italic">
    {children}
  </p>
);

const Photo: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <div className={`overflow-hidden rounded ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
  </div>
);

const TokojManual: React.FC = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const setRef = useCallback((i: number) => (el: HTMLElement | null) => { refs.current[i] = el; }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const i = refs.current.indexOf(e.target as HTMLElement);
          if (i >= 0) setActive(i);
        }
      }),
      { threshold: 0.25, rootMargin: '-8% 0px -8% 0px' },
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const go = (i: number) => refs.current[i]?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen antialiased selection:bg-amber-800/40 selection:text-amber-100"
      style={{ background: 'linear-gradient(180deg, #0f1628 0%, #111a2e 50%, #0d1322 100%)', color: '#e2e8f0' }}>

      <nav className="fixed left-5 top-5 z-50 mix-blend-difference">
        <Link to="/" className="text-[11px] tracking-[0.2em] text-white/50 hover:text-white/90 transition-colors">← BBM</Link>
      </nav>

      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2.5">
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => go(i)} className="group relative flex items-center justify-end" aria-label={s.label}>
            <span className="absolute right-5 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">{s.label}</span>
            <span className={`block rounded-full transition-all duration-300 ${
              active === i ? 'w-2 h-2 bg-amber-500 shadow-[0_0_6px_rgba(212,168,83,0.5)]' : 'w-1.5 h-1.5 bg-white/15 hover:bg-white/40'
            }`} />
          </button>
        ))}
      </nav>


      {/* ══════════ 1 — COVER ══════════ */}
      <section ref={setRef(0)} id="cover" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/tokoji/hero.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1628]/80 via-[#0f1628]/60 to-[#0f1628]/95" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1.2 }}
            className="text-amber-400/80 text-[11px] tracking-[0.45em] mb-10">
            2/23 東光寺インスタレーション
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            className="text-5xl md:text-7xl font-light tracking-[0.08em] text-white mb-5">
            音と光の建築
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}
            className="text-slate-300/60 text-sm tracking-[0.15em] mb-14">
            運用マニュアル ver.3
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}>
            <div className="w-14 h-px bg-amber-600/40 mx-auto mb-10" />
            <div className="space-y-2.5 text-slate-300/50 text-[12px] tracking-wider leading-loose">
              <p>コンセプト：境界をつくる——まちの音と光を、寺に置く</p>
              <p>開場 18:30 ／ 開演 19:00 ／ 上演30分 ＋ アフタートーク15〜20分</p>
              <p>会場：東光寺 本堂（茨城県土浦市）／ 適正30名（最大50名）</p>
              <p>企画：Beyond Boundary Music</p>
              <p>共有：スタッフ全員／住職／撮影班</p>
              <p>服装：黒（中村・宇津木は黒系和装、Mayumi＝留袖）</p>
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
            className="mt-20 text-slate-500/50 text-[10px] tracking-wider">
            最終更新日：2026-02-13（会議反映）
          </motion.p>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-amber-500/30 to-amber-500/50" />
        </motion.div>
      </section>


      {/* ══════════ 2 — CONCEPT ══════════ */}
      <section ref={setRef(1)} id="concept" className="relative overflow-hidden">
        <div className="w-full h-[340px] md:h-[420px] relative">
          <img src="/tokoji/installation-2.jpg" alt="インスタレーションイメージ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1628]/30 via-transparent to-[#0f1628]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-10 pb-24">
          <motion.div {...fadeUp}>
            <Num n={2} />
            <Title>作品の狙い</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">— 1分で共有 —</p>
          </motion.div>

          {/* experience curve — new 30min structure */}
          <motion.div {...stagger(0.15)} className="mb-14">
            <div className="flex items-end gap-1.5 md:gap-3 h-28 mb-3">
              {[
                { l: '入場', h: 12, c: 'bg-slate-600/70' },
                { l: '読経', h: 35, c: 'bg-amber-700/50' },
                { l: '結界1', h: 60, c: 'bg-amber-500/40' },
                { l: '結界2', h: 80, c: 'bg-violet-500/40' },
                { l: '結界3', h: 95, c: 'bg-amber-400/40' },
                { l: '消失', h: 20, c: 'bg-slate-600/50' },
                { l: '読経', h: 35, c: 'bg-amber-700/50' },
              ].map((b) => (
                <div key={b.l + b.h} className="flex-1 flex flex-col items-center gap-2">
                  <div className={`w-full rounded-sm ${b.c}`} style={{ height: `${b.h}%` }} />
                  <span className="text-[10px] text-slate-400/80 tracking-wider">{b.l}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-slate-700/50" />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1.5"><span>0:00</span><span>30:00</span></div>
          </motion.div>

          <motion.div {...stagger(0.25)} className="space-y-4 text-[15px] leading-relaxed text-slate-200/90">
            <p><span className="text-amber-500/70 mr-3">—</span>子どもが一斉に音を鳴らし空間を開く（登場は冒頭1回のみ）。マナミはiPhone再生と共に入室</p>
            <p><span className="text-amber-500/70 mr-3">—</span>松井住職の読経が「時間と権威」の軸を立てる</p>
            <p><span className="text-amber-500/70 mr-3">—</span>宇津木・中村が光のまゆWSの音・録音素材・楽器で「結界」を段階的に生成</p>
            <p><span className="text-amber-500/70 mr-3">—</span>サウンドピクニックの自転車・自然音がリズムを与え、全音が融合する</p>
            <p><span className="text-amber-500/70 mr-3">—</span>音が消え、再び読経で儀礼として回収。静寂で格を決める</p>
          </motion.div>

          <Dash />

          <motion.div {...stagger(0.3)} className="mt-4">
            <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-6">なぜ「寺」で、なぜ「境界」か</h3>
            <div className="space-y-5 text-[14px] leading-[1.9] text-slate-300/85">
              <p>寺に入ったとき、信仰の有無とは関係なく、声の出し方や歩く速度が自然に変わる。<br />
                説明される前に、空気が先に作用する。</p>
              <p>日常の空間では、私たちは無意識に役割を背負っている——年齢、立場、関係性、知識の差。<br />
                それらは社会を動かす一方で、「同じものを同じ場所で感じる」ことを難しくもする。</p>
              <p>ここで言う<span className="text-white/90">「境界」</span>は、排除の線引きではない。<br />
                音と光と空間の配置によって、役割をいったん保留にし、<span className="text-white/90">「同じ条件で居られる状態」</span>をつくること。</p>
              <p>作品を持ち込むのではなく、<span className="text-white/90">「起きていない場所」に状況をつくる。</span><br />
                その場を、地域の人たちと一緒につくる。ここに意義がある。</p>
            </div>
          </motion.div>

          <motion.div {...stagger(0.4)} className="mt-8">
            <div className="rounded p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <p className="text-[13px] leading-[1.9] text-slate-400/80 italic">
                複雑さを整理しない。説明でまとめる代わりに、同じ場所に置いてみせる。<br />
                音を置く。光を置く。人を置く。寺という場もそのまま使う。<br />
                その配置によって、複雑さが「そのまま見える状態」として立ち上がることを狙っている。
              </p>
              <p className="text-[11px] text-slate-500/60 mt-3 text-right">— BBM</p>
            </div>
          </motion.div>

          <motion.div {...stagger(0.45)}>
            <Aside>エンタメの盛り上げではなく「静寂を提示する」作品</Aside>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 3 — ROLES ══════════ */}
      <section ref={setRef(2)} id="roles" className="py-24 px-6" style={{ background: '#111d32' }}>
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:items-end md:gap-10 mb-14">
            <motion.div {...fadeUp} className="md:flex-1">
              <Num n={3} />
              <Title>役割分担</Title>
              <p className="text-slate-400 text-[11px] tracking-[0.2em]">当日迷わないための固定</p>
            </motion.div>
            <motion.div {...stagger(0.15)} className="mt-6 md:mt-0 md:w-72 shrink-0">
              <Photo src="/tokoji/performance.jpg" alt="東光寺パフォーマンス" className="h-44 md:h-48 rounded" />
            </motion.div>
          </div>

          <motion.div {...stagger(0.2)}>
            <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-5">コア役割</h3>
            <div className="border-t border-slate-600/20">
              {[
                { role: '住職（読経）', name: '松井住職', desc: '読経 第一回・第二回' },
                { role: '演奏＋音響＋機材管理＋運用実務', name: '宇津木（UTSUGI）', desc: '結界パート：楽器＋音響操作＋当日連絡' },
                { role: '演奏＋SP配置＋レイアウト最終判断', name: '中村（浩之）', desc: 'キーボード持参＋撮影にも関与' },
                { role: '装飾（空間）主導', name: '関ご夫妻（futashiba248）', desc: '13:00〜装飾開始・ストール管理' },
                { role: 'ライト操作＋暗転＋椅子テスト', name: '新井', desc: '来週リハでテスト実施' },
                { role: 'AT進行＋着物手配＋アナウンス文', name: 'Mayumi（田口）', desc: '留袖手配・進行構成・質問案・案内文' },
                { role: '入場演出＋スタッフ', name: 'マナミ', desc: '13時以降入り／iPhone再生＋入室／AT終盤登場は2/20相談' },
                { role: 'メイン撮影＋映像オペ', name: 'ユースケ', desc: '13時以降入り／動画撮影メイン＋当日の状況で役割調整' },
                { role: '撮影補助', name: '利根', desc: '午後から参加／LINEにて連絡' },
              ].map((r) => (
                <div key={r.role + r.name} className="flex items-baseline py-3.5 border-b border-slate-700/25 gap-4 text-[14px]">
                  <span className="text-white/90 flex-1 min-w-0">{r.role}</span>
                  <span className="text-slate-400/70 text-[12px] hidden md:block w-44 shrink-0">{r.desc}</span>
                  <span className="text-amber-400/70 w-28 shrink-0 text-right text-[13px]">{r.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...stagger(0.3)} className="mt-12">
            <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-5">アフタートーク（本番後／15〜20分・短縮版）</h3>
            <div className="rounded p-5 mb-4" style={{ background: 'rgba(255,255,255,0.025)' }}>
              <div className="space-y-2.5 text-[14px]">
                <p><span className="text-slate-400/70 mr-2 text-[12px]">進行</span><span className="text-amber-400/70">Mayumi（田口）</span></p>
                <p><span className="text-slate-400/70 mr-2 text-[12px]">登壇</span><span className="text-white/90">住職 ／ 中村 ／ 宇津木 ／ 関ご夫妻 ／ Mayumi</span></p>
                <p><span className="text-slate-400/70 mr-2 text-[12px]">時間</span>15〜20分（短縮で合意）</p>
                <p><span className="text-slate-400/70 mr-2 text-[12px]">形式</span>「今日は＿＿＿を、＿＿＿として味わう夜」─ 登壇者が一言ずつ</p>
              </div>
            </div>
            <div className="rounded p-4 border border-amber-500/15" style={{ background: 'rgba(212,168,83,0.03)' }}>
              <p className="text-[12px] text-amber-400/80"><span className="text-amber-500/60 mr-2">宿題</span>各自の一言内容を <span className="text-white/90 font-medium">2/20までにMayumiへ送付</span></p>
              <p className="text-[12px] text-amber-400/80 mt-1"><span className="text-amber-500/60 mr-2">Mayumi</span>進行構成・質問案を <span className="text-white/90 font-medium">2/20までに各メンバーへ送付</span></p>
            </div>
            <p className="text-[12px] text-slate-400/60 mt-2">※ アフタートーク撮影OK（関ご夫妻了承済）</p>
          </motion.div>

          <motion.div {...stagger(0.4)} className="mt-8">
            <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-5">連絡導線（当日）</h3>
            <div className="space-y-2.5 text-[14px]">
              <p><span className="text-slate-400/70 mr-2">住職合図</span>打音（鐘の鳴らし役を別途決定）</p>
              <p><span className="text-slate-400/70 mr-2">緊急合図</span>手挙げ ／ ライト点滅 ／ 一斉ミュート</p>
              <p><span className="text-slate-400/70 mr-2">緊急連絡</span>宇津木（電話）／ LINEグループ</p>
              <p><span className="text-slate-400/70 mr-2">服装</span>全員黒（中村・宇津木は黒系和装、Mayumi＝留袖）</p>
              <p><span className="text-slate-400/70 mr-2">終演→AT移行</span>Mayumi（田口）が声かけ・誘導</p>
              <Aside>利根は午後から参加。LINEにて合流時刻を連絡。</Aside>
            </div>
          </motion.div>

          <motion.div {...stagger(0.5)} className="mt-12">
            <div className="rounded p-5 border border-amber-500/20" style={{ background: 'rgba(212,168,83,0.04)' }}>
              <h3 className="text-[11px] text-amber-400/90 tracking-[0.25em] mb-4 font-medium">2/13 会議で確定</h3>
              <div className="space-y-2.5 text-[13px]">
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>適正人数：30名程度（最大50名可）</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>受付位置：屋内側を基本（天候・運営で柔軟に）</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>客席に椅子を配置する運用で進行</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>竹筒は階段に配置＋入室する子ども・マナミが持ち、いくつかをお堂に置く</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>装飾開始 13:00〜 ／ ストール持ち込み装飾ヘルプの方々も13時〜入り ／ ストール持参〆 12:00</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>マナミ・ユースケは13時以降入り（一緒に来場）</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>アフタートーク 15〜20分に短縮</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>子ども登場は冒頭1回のみ（簡潔な演出＝一斉に音を鳴らす）</p>
                <p className="text-amber-200/80"><span className="text-amber-500/60 mr-2">✓</span>子どもリハ：2/21（日）15:00以降（参加可否は再確認）</p>
              </div>
            </div>
            <div className="rounded p-5 border border-red-500/20 mt-4" style={{ background: 'rgba(239,68,68,0.04)' }}>
              <h3 className="text-[11px] text-red-400/90 tracking-[0.25em] mb-4 font-medium">未決事項・要検討</h3>
              <div className="space-y-2.5 text-[13px]">
                <p className="text-red-300/80"><span className="text-red-500/60 mr-2">!</span>プロジェクター：近距離投影で不安定 → 超短焦点レンタル or 液晶ディスプレイ代替を早急に判断</p>
                <p className="text-red-300/80"><span className="text-red-500/60 mr-2">!</span>スピーカー配置：浩之案ベースで変更方向、当日テストで最終確定</p>
                <p className="text-red-300/80"><span className="text-red-500/60 mr-2">!</span>子どもの「最後も登場するか」は最終調整中</p>
                <p className="text-red-300/80"><span className="text-red-500/60 mr-2">!</span>Manamiの登場タイミング（AT終盤案）→ 2/20に相談して決定</p>
                <p className="text-red-300/80"><span className="text-red-500/60 mr-2">!</span>装飾の細部（受付開始時間、ストール設置順等）→ 関ご夫妻 × UTSUGIで確定</p>
                <p className="text-red-300/80"><span className="text-red-500/60 mr-2">!</span>ストール返却トラブル対策：郵送（メルカリ便等）も選択肢</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 4 — VENUE LAYOUT ══════════ */}
      <section ref={setRef(3)} id="layout" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={4} />
            <Title>会場レイアウト</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-10">音響体験優先の基本形 ─ 適正30名・椅子あり</p>
          </motion.div>

          <div className="md:flex md:gap-8 mb-14">
            <motion.div {...stagger(0.1)} className="md:w-1/2 mb-8 md:mb-0">
              <Photo src="/tokoji/temple-interior.jpg" alt="東光寺 本堂内部" className="h-56 md:h-72 rounded" />
              <p className="text-slate-500 text-[10px] mt-2 text-center tracking-wider">東光寺 本堂</p>
            </motion.div>
            <motion.div {...stagger(0.2)} className="md:w-1/2">
              <div className="relative border border-slate-600/20 rounded p-6 md:p-8 aspect-[4/3]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="absolute top-3 left-3 text-[9px] text-amber-500/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />SP 前L
                </div>
                <div className="absolute top-3 right-3 text-[9px] text-amber-500/70 flex items-center gap-1">
                  SP 前R<span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-amber-500/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />SP 後L
                </div>
                <div className="absolute bottom-3 right-3 text-[9px] text-amber-500/70 flex items-center gap-1">
                  SP 後R<span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border border-dashed border-slate-500/30 rounded px-6 py-3 text-center">
                    <p className="text-slate-300/80 text-[11px] tracking-wider">観客エリア</p>
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] text-red-400/50 tracking-wider">仏具エリア（侵入不可）</div>
              </div>
            </motion.div>
          </div>

          <motion.div {...stagger(0.3)} className="space-y-8">
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">レイアウト方針</h3>
              <div className="space-y-3 text-[14px] leading-relaxed text-slate-200/85">
                <p><span className="text-amber-500/60 mr-3">—</span>観客は中央、スピーカーは周囲（包囲感＝立体感）</p>
                <p><span className="text-amber-500/60 mr-3">—</span>投影は「布（ストール）」を主役に：布の質感が結界の輪郭になる</p>
                <p><span className="text-amber-500/60 mr-3">—</span>椅子を配置（イベント尺に合わせた運用）── 2/17に椅子テスト（新井）</p>
                <p><span className="text-amber-500/60 mr-3">—</span>竹筒は階段に配置＋入室する子ども・マナミが持ち、いくつかをお堂に置く</p>
                <p><span className="text-amber-500/60 mr-3">—</span>ケーブルは"必ず"養生して導線から外す（安全が最優先）</p>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">スピーカー配置</h3>
              <div className="space-y-2.5 text-[14px] text-slate-200/85">
                <p><span className="text-slate-400/60 mr-3 text-[12px]">方針</span>浩之案ベースで配置変更の方向。当日テストで最終確定</p>
                <p><span className="text-slate-400/60 mr-3 text-[12px]">4台</span>前L / 前R / 後L / 後R（客席を囲む四隅）</p>
                <p><span className="text-slate-400/60 mr-3 text-[12px]">2台</span>前L / 前R（左右に大きく、距離を取る）</p>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">投影</h3>
              <p className="text-[14px] text-slate-200/85">スクリーンではなく「布」へ投影（手仕事のテクスチャ／格子／織りの質感）</p>
              <div className="rounded p-3 mt-3 border border-red-500/15" style={{ background: 'rgba(239,68,68,0.04)' }}>
                <p className="text-[12px] text-red-300/80"><span className="text-red-500/60 mr-2">!</span>近距離投影で安定性に課題 → 超短焦点プロジェクターのレンタル or 液晶ディスプレイ代替を検討中</p>
                <p className="text-[12px] text-red-300/80 mt-1"><span className="text-red-500/60 mr-2">!</span>当日テストを前提に、レンタル／代替を早めに判断</p>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">受付</h3>
              <p className="text-[14px] text-slate-200/85">屋内側（中）を基本（天候・運営で柔軟に判断）</p>
              <p className="text-[12px] text-slate-400/70 mt-1">開場 18:30 ／ 開演 19:00 → 静かにご案内</p>
            </div>
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">客席</h3>
              <p className="text-[14px] text-slate-200/85">適正30名（最大50名可）── 椅子あり運用</p>
              <p className="text-[12px] text-slate-400/70 mt-1">現在25名参加＋追加ストール設置予定</p>
            </div>
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">搬入経路</h3>
              <p className="text-[14px] text-slate-200/85">本堂の階段から搬入</p>
            </div>
            <div>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">駐車場</h3>
              <div className="space-y-1.5 text-[14px] text-slate-200/85">
                <p>等覚寺の駐車場（5〜6台）をお借り</p>
                <p className="text-[12px] text-slate-400/70">16時頃に車を東光寺P → 等覚寺Pへ移動</p>
                <p className="text-[12px] text-slate-400/70">UTSUGI：地図＋手書きメモ＋説明文を作成 → 予約者へ事前送付</p>
                <p className="text-[12px] text-slate-400/70">駐車場の場所・移動タイミングは北柴さん・次くんと調整</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...stagger(0.4)}>
            <Aside>住職導線・仏具エリアには絶対に侵入しない</Aside>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 5 — EQUIPMENT ══════════ */}
      <section ref={setRef(4)} id="equipment" className="py-24 px-6" style={{ background: '#111d32' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={5} />
            <Title>機材チェック</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">当日朝の点検表</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: '音響', items: [
                'PC（再生用）＋ オーディオIF ＋ Ableton Liveセッション',
                'スピーカー：2セット（4台）＋ スタンド ＋ 電源',
                'ケーブル：XLR / フォン / 延長 / 電源タップ / 養生テープ',
                'バックアップ：ステレオ2mix ＋ 予備再生端末（スマホ等）',
              ]},
              { title: '楽器（宇津木・中村）', items: [
                'ピアノ（会場備品 or 持込確認）',
                'サックス等の楽器 ＋ スタンド',
                'モニター環境（必要なら）',
              ]},
              { title: 'iPhone再生（入場演出：マナミ）', items: [
                'iPhone本体 ／ 充電 ／ 音源確認',
                '機内モード推奨 ／ 音量固定',
                '再生タイミングの確認（入室動線と同期）',
              ]},
              { title: '映像・投影', items: [
                '⚠ プロジェクター：近距離で不安定 → 超短焦点レンタル or 液晶ディスプレイ代替を検討中',
                'HDMI ／ 変換アダプタ ／ 予備ケーブル',
                '投影テスト画像（白 / 黒 / グリッド）を用意',
                '当日テストで投影方法・設置場所を最終確定（UTSUGI＋浩之）',
              ]},
              { title: '装飾（関ご夫妻／futashiba248）', items: [
                '布・ストール ／ 光のまゆ用素材',
                '装飾用テグス（細め〜中程度）── UTSUGIが購入・持参',
                'ストール持参〆：12:00 ／ 装飾開始 13:00〜',
                              ]},
              { title: '撮影（メイン：ユースケ）', items: [
                'ユースケ：動画撮影メイン＋映像オペ',
                '利根：撮影補助（午後から）',
                '素材名ルール：20260223_Tokoji_camA_001',
              ]},
              { title: 'ミキサー・マイク（UTSUGI）', items: [
                'ミキサー仕様・必要本数を調査し手配',
                '必要ならマイク1本持参（Mayumi使用予定）',
              ]},
              { title: 'その他（UTSUGI）', items: [
                '立て看板（会場用・駐車場用）を持参',
                '駐車場案内：地図＋手書きメモ＋説明文',
              ]},
            ].map((g, gi) => (
              <motion.div key={g.title} {...stagger(0.1 * gi)}
                className="rounded p-5" style={{ background: 'rgba(255,255,255,0.025)' }}>
                <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">{g.title}</h3>
                <div className="space-y-0 border-t border-slate-600/20">
                  {g.items.map((item, ii) => (
                    <div key={ii} className={`flex items-start gap-3 py-3 border-b ${item.startsWith('⚠') ? 'border-red-500/20 bg-red-950/10' : 'border-slate-700/15'}`}>
                      <span className={`w-4 h-4 mt-0.5 rounded-sm border shrink-0 flex items-center justify-center text-[8px] ${item.startsWith('⚠') ? 'border-red-500/30 text-red-400' : 'border-slate-500/30 text-slate-500'}`}>{item.startsWith('⚠') ? '!' : '✓'}</span>
                      <span className={`text-[13px] leading-relaxed ${item.startsWith('⚠') ? 'text-red-300/90 font-medium' : 'text-slate-200/85'}`}>{item.startsWith('⚠') ? item.slice(2) : item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════ 6 — DAY TIMELINE ══════════ */}
      <section ref={setRef(5)} id="timeline" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:gap-10">
            <div className="md:flex-1">
              <motion.div {...fadeUp}>
                <Num n={6} />
                <Title>当日タイムライン</Title>
                <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">9:00集合〜撤収</p>
              </motion.div>

              {/* 集合時間 */}
              <motion.div {...stagger(0.1)} className="mb-10">
                <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-4">集合</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded p-4 border border-amber-600/20" style={{ background: 'rgba(212,168,83,0.04)' }}>
                    <span className="text-amber-400/90 text-[20px] font-light font-mono">9:00</span>
                    <p className="text-[13px] text-white/90 mt-1">BBMメンバー集合</p>
                    <p className="text-[11px] text-slate-400/70 mt-1">中村・宇津木・田口・新井</p>
                  </div>
                  <div className="rounded p-4 border border-slate-600/20" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <span className="text-slate-300/80 text-[20px] font-light font-mono">10:00</span>
                    <p className="text-[13px] text-white/90 mt-1">他メンバー・WS参加者集合</p>
                    <p className="text-[11px] text-slate-400/70 mt-1">関ご夫妻（futashiba248）・WS参加の皆様 ほか</p>
                  </div>
                  <div className="rounded p-4 border border-slate-600/20" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <span className="text-slate-300/80 text-[20px] font-light font-mono">13:00〜</span>
                    <p className="text-[13px] text-white/90 mt-1">ストール持ち込み装飾ヘルプ・マナミ・ユースケ</p>
                    <p className="text-[11px] text-slate-400/70 mt-1">ストール持ち込みで装飾を手伝ってくださる方々はこの時間から入り</p>
                  </div>
                  <div className="rounded p-4 border border-slate-600/20" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <span className="text-slate-300/80 text-[20px] font-light font-mono">16:00頃</span>
                    <p className="text-[13px] text-white/90 mt-1">出演のお子様たち</p>
                    <p className="text-[11px] text-slate-400/70 mt-1">出演する子どもたちの入り時間（目安）</p>
                  </div>
                </div>
                <p className="text-[12px] text-slate-400/60 mt-3"><span className="text-amber-500/60 mr-1">※</span>駐車場：東光寺に隣接する<a href="https://kanko.tsuchiura.jp/togakuji" target="_blank" rel="noopener noreferrer" className="text-amber-400/80 underline underline-offset-2">等覚寺</a>の駐車場をお借りしています（5〜6台）</p>
                <p className="text-[12px] text-slate-400/60 mt-1"><span className="text-amber-500/60 mr-1">※</span>等覚寺へお越しの方もいらっしゃいますので、開場時間の少し前までは東光寺の駐車場にお停めいただき、時間になりましたら等覚寺の駐車場へ移動をお願いいたします</p>
                <p className="text-[12px] text-slate-400/60 mt-1"><span className="text-amber-500/60 mr-1">※</span>利根は午後から参加（LINEにて合流連絡）</p>
              </motion.div>

              {/* タイムライン */}
              <motion.div {...stagger(0.15)} className="relative pl-6">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-600/25" />
                {[
                  { n: 1, t: '9:00 — BBM搬入開始', d: '機材搬入・スピーカー／PC／楽器の配置', a: true },
                  { n: 2, t: '9:30 — 配線・養生', d: 'ケーブル敷設＋養生テープ。安全最優先', a: true },
                  { n: 3, t: '10:00 — 他メンバー合流・装飾設営', d: '関ご夫妻（futashiba248）：布／光のまゆ設置。WS参加者と協力', a: false },
                  { n: 4, t: '10:30 — 音出し', d: '極小→通常→最大想定　※寺に合わせて最終音量決定', a: false },
                  { n: 5, t: '11:00 — 投影チェック', d: '布の揺れ／映り／焦点', a: false },
                  { n: 6, t: '11:30 — iPhone再生確認', d: '入場時の音源・音量・タイミング', a: false },
                  { n: 7, t: '12:00 — 昼休憩（ストール持参〆）', d: 'ストールは12:00までに持参', a: false },
                  { n: 8, t: '13:00 — 装飾開始＋マナミ・ユースケ合流', d: '関ご夫妻 装飾開始。ストール持ち込み装飾ヘルプの方々入り。マナミ・ユースケ合流', a: true },
                  { n: 9, t: '14:00 — 最終確認', d: '全体通し確認・微調整', a: false },
                  { n: 10, t: '14:30–16:00 — 待機・休憩', d: '投影・音響の微調整', a: false },
                  { n: 11, t: '16:00 — 駐車場移動', d: '車を東光寺P → 等覚寺Pへ移動', a: false },
                  { n: 12, t: '16:30 — 全体リハーサル', d: '本番と同じ流れで通す。ライト・暗転テスト', a: true },
                  { n: 13, t: '18:30 — 開場・客入れ', d: '屋内側受付でご案内', a: true },
                  { n: 14, t: '19:00 — 開演（本番）', d: '上演30分', a: true },
                  { n: 15, t: '19:30頃 — アフタートーク', d: '15〜20分／進行：Mayumi（田口）', a: true },
                  { n: 15, t: '撤収', d: 'ストール返却・片付け。仏具・空間を傷つけない', a: false },
                ].map((s) => (
                  <div key={s.n} className="relative flex items-start gap-5 py-3.5">
                    <div className={`relative z-10 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 text-[9px] -ml-[13px] ${
                      s.a ? 'border-amber-500/60 bg-amber-900/30 text-amber-400' : 'border-slate-600/40 bg-[#0f1628] text-slate-500'
                    }`}>{s.n}</div>
                    <div>
                      <p className={`text-[14px] ${s.a ? 'text-white font-medium' : 'text-slate-200/85'}`}>{s.t}</p>
                      {s.d && <p className={`text-[12px] mt-0.5 ${s.d.startsWith('⚠') ? 'text-red-400/90 font-medium' : 'text-slate-400/70'}`}>{s.d}</p>}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div {...stagger(0.2)} className="hidden md:block md:w-64 shrink-0 mt-24">
              <Photo src="/tokoji/temple-exterior.jpg" alt="東光寺 外観" className="h-80 rounded" />
              <p className="text-slate-500 text-[10px] mt-2 text-center tracking-wider">東光寺 外観</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════ 7 — RUNTHROUGH (30min) ══════════ */}
      <section ref={setRef(6)} id="runthrough" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:gap-10 mb-14">
            <motion.div {...fadeUp} className="md:flex-1">
              <Num n={7} />
              <Title>本番ランスルー</Title>
              <p className="text-slate-400 text-[11px] tracking-[0.2em]">30分の全体像　＋　アフタートーク</p>
            </motion.div>
            <motion.div {...stagger(0.1)} className="mt-6 md:mt-0 md:w-80 shrink-0">
              <Photo src="/tokoji/installation-1.jpg" alt="インスタレーション風景" className="h-48 rounded" />
            </motion.div>
          </div>

          <motion.div {...stagger(0.2)}>
            {[
              { time: '0:00–3:00', title: '入場', desc: '子ども＋マナミがiPhone再生と共に入室', c: 'bg-slate-500/50', w: '10%' },
              { time: '3:00–8:00', title: '読経（第一回）', desc: '松井住職入室→読経で時間と権威の軸を立てる', c: 'bg-amber-600/40', w: '17%' },
              { time: '8:00–14:00', title: '結界1：光のまゆ', desc: 'WS採取音＋rec素材＋楽器で結界を生成（宇津木・中村）', c: 'bg-amber-500/35', w: '20%' },
              { time: '14:00–20:00', title: '結界2：サウンドピクニック', desc: '自転車の音・自然音でリズミックなセクション', c: 'bg-violet-500/35', w: '20%' },
              { time: '20:00–25:00', title: '結界3：融合', desc: '全ての音が合わさりピークへ', c: 'bg-amber-400/35', w: '17%' },
              { time: '25:00–27:00', title: '消失', desc: '音が段階的に消えていく', c: 'bg-slate-500/35', w: '7%' },
              { time: '27:00–30:00', title: '読経（第二回）', desc: '松井住職再入室→読経で儀礼として回収・完結', c: 'bg-amber-600/40', w: '10%' },
            ].map((b) => (
              <div key={b.time} className="flex items-center gap-4 md:gap-6 py-3 border-b border-slate-700/20">
                <span className="text-[12px] text-amber-500/70 w-24 shrink-0 font-mono">{b.time}</span>
                <div className="hidden md:block w-28 shrink-0">
                  <div className={`h-1.5 rounded-full ${b.c}`} style={{ width: b.w, minWidth: '6px' }} />
                </div>
                <div className="min-w-0">
                  <span className="text-[14px] text-white/90">{b.title}</span>
                  <span className="text-[12px] text-slate-400/70 ml-3">{b.desc}</span>
                </div>
              </div>
            ))}

            {/* After-talk */}
            <div className="mt-6 pt-6 border-t border-slate-600/30">
              <div className="flex items-center gap-4 md:gap-6 py-3">
                <span className="text-[12px] text-amber-500/70 w-24 shrink-0 font-mono">本番後</span>
                <div className="hidden md:block w-28 shrink-0">
                  <div className="h-1.5 rounded-full bg-emerald-500/35" style={{ width: '100%' }} />
                </div>
                <div className="min-w-0">
                  <span className="text-[14px] text-white/90">アフタートーク（15〜20分）</span>
                  <span className="text-[12px] text-slate-400/70 ml-3">進行：Mayumi（田口）／ 登壇：住職・中村・宇津木・関ご夫妻・Mayumi ── 一言ずつ</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 8 — REFERENCE AUDIO & VIDEO ══════════ */}
      <section ref={setRef(7)} id="reference" className="py-24 px-6" style={{ background: '#111d32' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={8} />
            <Title>参考音源・映像</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">本番に向けた参考素材 ─ 各セクションの音源をその場で再生</p>
          </motion.div>

          {/* Audio Players */}
          <motion.div {...stagger(0.15)} className="space-y-5 mb-14">
            {[
              { src: '/tokoji/audio/01-nyujo.mp3', title: '入場', time: '0:00–3:00', duration: '0:38', desc: '子ども＋マナミがiPhone再生と共に入室', color: 'bg-slate-500/50' },
              { src: '/tokoji/audio/02-dokyo.mp3', title: '読経', time: '3:00–8:00', duration: '1:42', desc: '松井住職の読経 ─ 時間と権威の軸を立てる', color: 'bg-amber-600/40' },
              { src: '/tokoji/audio/03-kekkai1.mp3', title: '境界1：光のまゆ', time: '8:00–14:00', duration: '4:52', desc: '楽器＋光のまゆWSの音', color: 'bg-amber-500/40' },
              { src: '/tokoji/audio/04-kekkai2.mp3', title: '境界2：サウンドピクニック', time: '14:00–20:00', duration: '5:02', desc: '自転車の音・自然音でリズミックなセクション', color: 'bg-violet-500/40' },
              { src: '', title: '境界3：融合', time: '20:00–25:00', duration: '—', desc: '全ての音が合わさりピークへ', color: 'bg-amber-400/40', wip: true },
              { src: '', title: '読経（第二回）', time: '27:00–30:00', duration: '—', desc: '松井住職再入室 ─ 儀礼として回収・完結', color: 'bg-amber-600/40', wip: true },
            ].map((track: { src: string; title: string; time: string; duration: string; desc: string; color: string; wip?: boolean }, i) => (
              <div key={track.title} className={`rounded-lg border overflow-hidden ${track.wip ? 'border-slate-700/15 opacity-50' : 'border-slate-600/20'}`} style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className={`flex items-center gap-4 px-5 py-3 ${track.wip ? '' : 'border-b border-slate-700/15'}`}>
                  <span className="text-amber-500/70 text-[11px] font-mono tracking-wider w-20 shrink-0">{track.time}</span>
                  <div className={`w-2 h-2 rounded-full ${track.color} shrink-0`} />
                  <div className="min-w-0 flex-1">
                    <span className="text-[14px] text-white/90 font-medium">{track.title}</span>
                    {track.wip && <span className="text-[10px] text-amber-500/60 tracking-[0.15em] ml-3 border border-amber-500/20 px-2 py-0.5 rounded-full">作成中</span>}
                    <span className="text-[12px] text-slate-400/60 ml-3 hidden md:inline">{track.desc}</span>
                  </div>
                  <span className="text-[11px] text-slate-500/60 font-mono shrink-0">{track.duration}</span>
                </div>
                {!track.wip && (
                  <>
                    <div className="px-5 py-3">
                      <audio controls preload="metadata" className="w-full h-8 opacity-80" style={{ filter: 'sepia(30%) hue-rotate(5deg) saturate(0.6) brightness(0.85)' }}>
                        <source src={track.src} type="audio/mpeg" />
                      </audio>
                    </div>
                    <p className="px-5 pb-3 text-[12px] text-slate-400/60 md:hidden">{track.desc}</p>
                  </>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ══════════ 9 — REHEARSAL RECORD ══════════ */}
      <section ref={setRef(8)} id="rehearsal" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={9} />
            <Title>リハーサル記録</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">前回の東光寺リハテスト ─ 布投影・音響・竹ライトの確認</p>
          </motion.div>

          {/* Videos */}
          <motion.div {...stagger(0.15)} className="mb-12">
            <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-5">テスト映像</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <video controls preload="metadata" playsInline className="w-full rounded-lg" poster="/tokoji/rehearsal/IMG_4648.jpg">
                  <source src="/tokoji/rehearsal/test-sound-light.mp4" type="video/mp4" />
                </video>
                <p className="text-[12px] text-slate-400/70 mt-2">音と光のテスト</p>
              </div>
              <div>
                <video controls preload="metadata" playsInline className="w-full rounded-lg" poster="/tokoji/rehearsal/IMG_4647.jpg">
                  <source src="/tokoji/rehearsal/test-projection.mp4" type="video/mp4" />
                </video>
                <p className="text-[12px] text-slate-400/70 mt-2">東光寺での映像投射テスト</p>
              </div>
            </div>
          </motion.div>

          <Dash />

          {/* Photos */}
          <motion.div {...stagger(0.3)} className="mt-10">
            <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-5">会場セットアップ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/tokoji/rehearsal/IMG_4641.jpg', alt: '本堂 布の設営' },
                { src: '/tokoji/rehearsal/IMG_4647.jpg', alt: '布投影＋竹ライト' },
                { src: '/tokoji/rehearsal/IMG_4648.jpg', alt: 'スピーカー配置・全景' },
                { src: '/tokoji/rehearsal/IMG_4649.jpg', alt: '布＋光の空間' },
              ].map((img) => (
                <div key={img.src} className="overflow-hidden rounded-lg group cursor-pointer">
                  <img src={img.src} alt={img.alt} loading="lazy"
                    className="w-full h-40 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <p className="text-[10px] text-slate-500/60 mt-1.5 tracking-wider">{img.alt}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 10 — CUE SHEET 1 (0:00–8:00) ══════════ */}
      <section ref={setRef(9)} id="cue1" className="relative py-24 px-6" style={{ background: '#111d32' }}>
        <div className="absolute inset-0 opacity-[0.06]">
          <img src="/tokoji/installation-4.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...fadeUp}>
            <Num n={10} />
            <Title>キューシート ①</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-10">0:00–8:00　入場＋読経</p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="overflow-x-auto -mx-6 px-6 pb-2">
            <table className="w-full text-[13px] min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-500/20">
                  {['Time', 'シーン', '進行（見える動き）', '音', '映像/光', '注意'].map((h) => (
                    <th key={h} className="text-left py-3 px-3 text-amber-500/70 font-normal text-[11px] tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { t: '0:00', s: '入場', f: '子どもが一斉に音を鳴らし空間を開く（冒頭1回のみ）。マナミがiPhoneと共に入室', a: 'iPhone再生：自然音（風/水/草）極小＋子どもの音', v: '映像なし／暗め', n: '子ども登場は冒頭1回のみ。簡潔な演出' },
                  { t: '1:30', s: 'チューニング', f: '観客の呼吸が落ちるまで待つ', a: 'iPhone音量は極小。耳を澄ませば聴こえる程度', v: '変化なし', n: 'ここで焦らない' },
                  { t: '3:00', s: '読経①開始', f: '松井住職入室→読経（約5分）', a: 'iPhone再生はフェードアウト or ミュート', v: '必要なら投影オフ固定', n: '読経が「軸」になる' },
                  { t: '8:00', s: '読経①終了', f: '打音（合図）', a: '結界パートへの切替準備', v: '次幕へ', n: '合図の音は小さく確実に' },
                ].map((r) => (
                  <tr key={r.t} className="border-b border-slate-700/15 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-3 text-amber-400/80 font-mono text-[12px] whitespace-nowrap font-medium">{r.t}</td>
                    <td className="py-3 px-3 text-white/90 font-medium whitespace-nowrap">{r.s}</td>
                    <td className="py-3 px-3 text-slate-200/80">{r.f}</td>
                    <td className="py-3 px-3 text-slate-300/70">{r.a}</td>
                    <td className="py-3 px-3 text-slate-300/70">{r.v}</td>
                    <td className="py-3 px-3 text-slate-400/60 text-[12px]">{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 10 — CUE SHEET 2 (8:00–25:00) ══════════ */}
      <section ref={setRef(10)} id="cue2" className="relative py-24 px-6">
        <div className="absolute inset-0 opacity-[0.05]">
          <img src="/tokoji/installation-3.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...fadeUp}>
            <Num n={11} />
            <Title>キューシート ②</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-3">8:00–25:00　結界1→結界2→結界3</p>
            <p className="text-slate-400/60 text-[12px] mb-10">3段階で"結界"を生成し、全ての音を融合させる</p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="overflow-x-auto -mx-6 px-6 pb-2">
            <table className="w-full text-[13px] min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-500/20">
                  {['Time', 'セクション', '進行', '音', '映像/光', '注意'].map((h) => (
                    <th key={h} className="text-left py-3 px-3 text-amber-500/70 font-normal text-[11px] tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { t: '8:00', s: '結界1：光のまゆ', f: '松井住職退室（または奥へ）→宇津木・中村が演奏開始', a: '光のまゆWS採取音＋rec素材＋楽器（呼吸/倍音）', v: '投影開始（暗い抽象→布のテクスチャ）', n: '夢心地の時間。急に上げない' },
                  { t: '14:00', s: '結界2：サウンドピクニック', f: '音の質感が変化。リズムが生まれ始める', a: '自転車の音・自然音（サウンドピクニック素材）でリズミックに展開', v: '映像も質感変化（動きのある映像へ）', n: 'リズム感を出しつつ寺の空気を壊さない' },
                  { t: '20:00', s: '結界3：融合', f: '空間が異界化。全ての音が合わさる', a: 'WS音＋ピクニック音＋楽器＋rec全てが重なりピーク', v: '布投影ピーク', n: '音密度ピーク。ただし痛くしない' },
                  { t: '25:00', s: '消失', f: '音が段階的に消えていく', a: '楽器→rec素材→WS音の順にフェードアウト', v: '映像も段階的に消す', n: '"終わった感"を出しすぎない' },
                ].map((r) => (
                  <tr key={r.t} className="border-b border-slate-700/15 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-3 text-amber-400/80 font-mono text-[12px] whitespace-nowrap font-medium">{r.t}</td>
                    <td className="py-3 px-3 text-white/90 font-medium whitespace-nowrap">{r.s}</td>
                    <td className="py-3 px-3 text-slate-200/80">{r.f}</td>
                    <td className="py-3 px-3 text-slate-300/70">{r.a}</td>
                    <td className="py-3 px-3 text-slate-300/70">{r.v}</td>
                    <td className="py-3 px-3 text-slate-400/60 text-[12px]">{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 11 — CUE SHEET 3 (25:00–30:00) ══════════ */}
      <section ref={setRef(11)} id="cue3" className="py-24 px-6" style={{ background: '#111d32' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={12} />
            <Title>キューシート ③</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-10">25:00–30:00　消失→読経→静寂</p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="overflow-x-auto -mx-6 px-6 pb-2">
            <table className="w-full text-[13px] min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-500/20">
                  {['Time', 'シーン', '進行', '音', '映像/光', '注意'].map((h) => (
                    <th key={h} className="text-left py-3 px-3 text-amber-500/70 font-normal text-[11px] tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { t: '25:00', s: '消失', f: '宇津木・中村が演奏を終える', a: '音が段階的に消えていく。最後に自然音だけ残る', v: '映像フェードアウト', n: '余韻を大切に', hl: false },
                  { t: '27:00', s: '読経②開始', f: '松井住職再入室→読経', a: 'PC/楽器はミュート。読経のみ', v: '投影オフ or 最小限', n: '儀礼として全てを回収する', hl: false },
                  { t: '29:30', s: '読経②終了', f: '打音（合図）', a: '完全無音へ', v: '自然光/暗さのみ', n: '合図は静かに確実に', hl: false },
                  { t: '30:00', s: '完全な静寂', f: '全員静止', a: '無音（完全）', v: '自然光のみ', n: '拍手誘導しない。静寂が作品', hl: true },
                ].map((r) => (
                  <tr key={r.t} className={`border-b border-slate-700/15 transition-colors ${r.hl ? 'bg-amber-900/10' : 'hover:bg-white/[0.02]'}`}>
                    <td className="py-3 px-3 text-amber-400/80 font-mono text-[12px] whitespace-nowrap font-medium">{r.t}</td>
                    <td className={`py-3 px-3 font-medium whitespace-nowrap ${r.hl ? 'text-amber-300/90' : 'text-white/90'}`}>{r.s}</td>
                    <td className="py-3 px-3 text-slate-200/80">{r.f}</td>
                    <td className={`py-3 px-3 ${r.hl ? 'text-white/80 font-medium' : 'text-slate-300/70'}`}>{r.a}</td>
                    <td className="py-3 px-3 text-slate-300/70">{r.v}</td>
                    <td className={`py-3 px-3 text-[12px] ${r.hl ? 'text-amber-500/70' : 'text-slate-400/60'}`}>{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 12 — AUDIENCE GUIDE ══════════ */}
      <section ref={setRef(12)} id="audience" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <img src="/tokoji/installation-2.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp}>
            <Num n={13} />
            <Title>観客ガイド</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-16">最小の言葉で統一 ／ 適正30名 ── アナウンス文はMayumi準備</p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="space-y-12">
            {[
              { label: '開演前', items: ['撮影OK（開演前のみ）', '静かに入室', '携帯はマナーモード（アナウンスで案内）'] },
              { label: '作品中', items: ['撮影NG（取材班のみ可）', '私語なし', '移動なし'], sub: '（体験の核が"聴くこと"）' },
              { label: '終演', items: ['拍手を求めない', '静寂の余韻を保ってから誘導', 'アフタートークへ案内（15〜20分）／撮影OK'], bold: 0 },
            ].map((g) => (
              <div key={g.label}>
                <span className="text-[11px] text-amber-500/70 tracking-[0.3em]">{g.label}</span>
                <Dash />
                <div className="space-y-2 text-[14px] text-slate-200/85">
                  {g.items.map((item, i) => (
                    <p key={i} className={g.bold === i ? 'text-white font-medium' : ''}>{item}</p>
                  ))}
                  {g.sub && <p className="text-slate-400/60 text-[12px] mt-2">{g.sub}</p>}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...stagger(0.4)}>
            <Aside>説明をしすぎない。作品の"格"を下げない。</Aside>
          </motion.div>
        </div>
      </section>


      {/* ══════════ 13 — FILMING ══════════ */}
      <section ref={setRef(13)} id="filming" className="py-24 px-6" style={{ background: '#111d32' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={14} />
            <Title>撮影・取材</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-10">メイン：ユースケ（動画）／ 補助：利根 ／ Jコム取材あり</p>
          </motion.div>

          <motion.div {...stagger(0.1)} className="flex gap-3 mb-12 overflow-x-auto -mx-6 px-6 pb-2">
            <Photo src="/tokoji/installation-1.jpg" alt="布投影" className="h-40 w-60 shrink-0 rounded" />
            <Photo src="/tokoji/installation-3.jpg" alt="竹ライト" className="h-40 w-60 shrink-0 rounded" />
            <Photo src="/tokoji/installation-4.jpg" alt="本堂全景" className="h-40 w-60 shrink-0 rounded" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div {...stagger(0.2)}>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-3">撮影優先カット（最低限）</h3>
              <p className="text-[12px] text-red-400/60 mb-5">※ 観客の撮影：開演前＋アフタートーク＝OK ／ 作品中＝NG</p>
              <div className="border-t border-slate-600/20">
                {[
                  '客席中央から見た「布投影＋竹ライト＋本堂奥」',
                  '松井住職の入退室（横から／邪魔しない）',
                  '子ども・マナミがiPhoneと共に入室する風景（0:00–3:00）',
                  '宇津木・中村の演奏（8:00–25:00）',
                  '結界ピーク＝融合（20:00–25:00）※光量とブレ注意',
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-slate-700/15">
                    <span className="text-amber-600/60 text-[11px] mt-0.5 shrink-0 font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] leading-relaxed text-slate-200/85">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...stagger(0.3)}>
              <h3 className="text-[11px] text-amber-500/80 tracking-[0.25em] mb-5">素材管理</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-slate-400/60 text-[11px] mb-2">ファイル名ルール</p>
                  <code className="text-[12px] text-amber-400/80 bg-slate-800/50 px-3 py-2 rounded block font-mono">
                    20260223_Tokoji_video_A001
                  </code>
                </div>
                <div>
                  <p className="text-slate-400/60 text-[11px] mb-2">共有先フォルダ</p>
                  <p className="text-slate-400/50 font-serif text-[14px]">＿＿＿＿（後で追記）</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════ 14 — TROUBLESHOOTING ══════════ */}
      <section ref={setRef(14)} id="trouble" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={15} />
            <Title>トラブル対応</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">"止めない"ための即応ルール</p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="grid md:grid-cols-2 gap-5">
            {[
              { title: '音が出ない', steps: [
                '①マスター音量 ②IF ③Ableton Live出力先 ④ケーブル ⑤電源 の順に確認',
                '最終手段：バックアップ2mix（スマホ再生）へ切替（静かに）',
              ], hi: true },
              { title: '映像が飛ぶ/映らない', steps: [
                '投影を一旦OFF→音のみで続行（作品は成立する）',
                '超短焦点レンタル機材の場合：ケーブル確認→再起動→OFF',
                '液晶ディスプレイ代替の場合：入力切替→再接続',
                '布が揺れる場合：固定点を増やす／風の導線を切る',
              ], hi: false },
              { title: 'iPhone再生トラブル', steps: [
                '入場演出を短縮し、静かに着席させる',
                'PC側で自然音を極小再生してカバー→読経へ移行',
              ], hi: false },
              { title: '会場安全', steps: [
                'ケーブルに触れそうな動きが出たら、進行より安全優先で制止',
                '住職導線・仏具エリアは絶対死守',
              ], hi: true },
            ].map((c) => (
              <div key={c.title} className={`rounded p-5 border ${
                c.hi ? 'border-red-500/15 bg-red-950/10' : 'border-slate-600/15 bg-white/[0.02]'
              }`}>
                <h3 className={`text-[14px] font-medium mb-3.5 ${c.hi ? 'text-red-300/80' : 'text-white/90'}`}>{c.title}</h3>
                <div className="space-y-2.5">
                  {c.steps.map((s, i) => (
                    <p key={i} className="text-[12px] leading-relaxed text-slate-300/70">{s}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════ 16 — TODO ══════════ */}
      <section ref={setRef(15)} id="todo" className="py-24 px-6" style={{ background: '#111d32' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <Num n={16} />
            <Title>ToDo一覧</Title>
            <p className="text-slate-400 text-[11px] tracking-[0.2em] mb-12">2/13会議後 ─ 担当者別アクション</p>
          </motion.div>

          <motion.div {...stagger(0.1)} className="space-y-8">
            {[
              { who: 'UTSUGI（宇津木）', items: [
                '超短焦点プロジェクターのレンタル案を調査・候補提示',
                '駐車場案内：地図＋手書きメモ＋説明文を作成 → 予約者へ送付',
                '参加者・来場者へ駐車場／導線案内をメール等で連絡',
                '装飾用テグス（細め〜中程度）を購入・持参',
                '立て看板（会場用・駐車場用）を持参',
                'ユースケさん／利根くんと当日スケジュール調整',
                '2/17：松井住職へストール預かり・返却を相談',
                'ストール持参者／返却者の記録・管理（必要なら郵送対応）',
                '子どもリハ参加可否を再確認し連絡',
                '駐車場の場所・移動タイミングを北柴さん・次くんと調整',
                '新井くんへライト操作・暗転タイミング依頼／来週テスト実施',
                '鐘の鳴らし役を決め、演出に反映',
                'ミキサー／マイク必要本数・仕様を調査し手配（必要ならマイク1本持参）',
                '開場・入場案内を関係者へ周知',
                'マニュアル／進行資料を関係者に共有（tokojiサイトを基準に更新）',
                'Jコム等メディア対応・取材スケジュール調整',
              ]},
              { who: '浩之（中村）', items: [
                '液晶ディスプレイ案の価格・実現性を調査（代替案として提示）',
                'スピーカー配置・会場レイアウト最終案を検討',
                '当日：投影方法／設置場所をテストし対応策を決定（UTSUGIと）',
                'キーボードを会場へ持参',
                'アフタートーク後のManami登場タイミングを2/20に相談',
                '次回イベント（点字イベント等）に触れてよいか関係者と相談',
              ]},
              { who: '関ご夫妻（futashiba248）', items: [
                '13時以降の装飾開始を関係者へ案内・指示',
                'ストール・装飾・受付開始時間等の詳細スケジュールをUTSUGIと確定',
                'ストール返却・管理方法を検討（必要なら住職と調整）',
                              ]},
              { who: '新井', items: [
                '2/17：椅子テスト（配置／人数／装飾案の確認）',
                '来週：ライト・音響のリハ／暗転タイミングのテスト',
              ]},
              { who: 'Mayumi（田口）', items: [
                '2/20までにアフタートーク進行構成・質問案を各メンバーへ送付',
                '着物（留袖）手配・サイズ確認（必要なら足袋等）',
                'アナウンス文（撮影・取材・マナーモード等）準備',
              ]},
              { who: '全員（住職／浩之／UTSUGI／関ご夫妻／Mayumi）', items: [
                '「今日は＿＿＿を＿＿＿として味わう夜」：各自の一言内容を 2/20までにMayumiへ送付',
                '竹筒に名前を内側に貼る対応を検討・実施',
              ]},
            ].map((group) => (
              <div key={group.who} className="rounded p-5 border border-slate-600/15" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <h3 className="text-[13px] text-amber-400/90 font-medium mb-3">{group.who}</h3>
                <div className="space-y-0 border-t border-slate-700/15">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-slate-700/10">
                      <span className="w-4 h-4 mt-0.5 rounded-sm border border-slate-500/30 shrink-0 flex items-center justify-center text-[8px] text-slate-500">{'□'}</span>
                      <span className="text-[13px] leading-relaxed text-slate-200/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ── FOOTER / APPENDIX ── */}
      <section className="px-6 py-20 border-t border-slate-700/20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-[11px] text-slate-500/70 tracking-[0.2em] mb-8">確定事項</p>
            <div className="border-t border-slate-600/15">
              {[
                { q: '開場／開演', a: '18:30 開場 ／ 19:00 開演' },
                { q: '集合', a: '9:00 BBM ／ 10:00 他メンバー' },
                { q: '適正人数', a: '30名（最大50名可）' },
                { q: '客席', a: '椅子あり運用' },
                { q: '受付', a: '屋内側を基本（天候で柔軟に）' },
                { q: '住職の合図', a: '打音（鐘の鳴らし役は別途決定）' },
                { q: '観客撮影', a: '開演前＋AT＝OK ／ 作品中＝NG' },
                { q: 'アフタートーク', a: '15〜20分（短縮版）' },
                { q: 'DAW', a: 'Ableton Live' },
                { q: '緊急連絡', a: '宇津木（電話）' },
                { q: '駐車場', a: '等覚寺P（5〜6台）／16時頃に移動' },
                { q: '服装', a: '全員黒（中村・宇津木＝黒系和装、Mayumi＝留袖）' },
                { q: '搬入', a: '本堂の階段から' },
                { q: '暖房', a: '寺側で暖房あり' },
                { q: '装飾開始', a: '13:00〜 ／ ストール持参〆 12:00' },
                { q: '子どもリハ', a: '2/21（日）15:00以降' },
                { q: '子ども演出', a: '冒頭1回のみ（一斉に音を鳴らす）' },
                { q: 'AT宿題〆', a: '2/20までに各自→Mayumiへ送付' },
              ].map((item) => (
                <div key={item.q} className="flex items-center justify-between py-3.5 border-b border-slate-700/15">
                  <span className="text-[13px] text-slate-300/70">{item.q}</span>
                  <span className="text-[13px] text-slate-200/70">{item.a}</span>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <h3 className="text-[11px] text-amber-500/70 tracking-[0.25em] mb-5">クレジット</h3>
              <div className="space-y-2 text-[12px] text-slate-400/70">
                <p>企画：Beyond Boundary Music</p>
                <p>協力：NPO法人まちづくり活性化土浦 ／ 土浦界隈まちづくり研究会</p>
                <p>装飾：関ご夫妻（futashiba248）</p>
                <p className="text-slate-500/50 text-[11px] mt-3">土浦市協働のまちづくりファンド認定事業<br />つちうらサウンド・アーカイブ・プロジェクト</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="w-10 h-px bg-amber-600/30 mx-auto mb-5" />
              <p className="text-[10px] text-slate-500/50 tracking-wider">東光寺インスタレーション「音と光の建築」</p>
              <p className="text-[10px] text-slate-500/40 tracking-wider mt-1">運用マニュアル ver.3（2/13会議反映）</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default TokojManual;
