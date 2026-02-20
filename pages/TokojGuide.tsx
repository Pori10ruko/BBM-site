import React from 'react';
import { motion } from 'framer-motion';

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};
const stagger = (d: number) => ({ ...fade, transition: { ...fade.transition, delay: d } });

const TokojGuide: React.FC = () => {
  return (
    <div className="min-h-screen antialiased selection:bg-amber-800/40 selection:text-amber-100"
      style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #0f1628 30%, #111a2e 60%, #0d1322 100%)', color: '#e2e8f0' }}>


      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/tokoji/hero.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-[#0a0f1a]/50 to-[#0a0f1a]" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1.2 }}
            className="text-amber-400/70 text-[10px] tracking-[0.5em] mb-8">
            BEYOND BOUNDARY MUSIC
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            className="text-4xl md:text-6xl font-light tracking-[0.1em] text-white mb-4 leading-tight">
            音と光の建築
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            className="text-slate-300/50 text-[15px] md:text-[17px] tracking-[0.12em] mb-12">
            ─ 東光寺インスタレーション ─
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
            className="space-y-1.5 text-slate-300/50 text-[12px] tracking-[0.15em]">
            <p>2026年2月23日（月・祝）</p>
            <p>開場 18:30 ／ 開演 19:00</p>
            <p>東光寺 本堂（茨城県土浦市）</p>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="text-slate-400/30 text-[10px] tracking-[0.2em] mt-16">
            ご来場の皆さまへ
          </motion.p>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-amber-500/20 to-amber-500/40" />
        </motion.div>
      </section>


      {/* ═══ INTRO — このイベントについて ═══ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fade}>
            <p className="text-amber-500/60 text-[10px] tracking-[0.4em] mb-6">ABOUT THIS EVENT</p>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif" }}
              className="text-[24px] md:text-[30px] font-light tracking-wide text-white/90 mb-10 leading-relaxed">
              この夜について
            </h2>
          </motion.div>

          <motion.div {...stagger(0.15)} className="space-y-6 text-[15px] leading-[2] text-slate-300/80">
            <p>
              これはコンサートでも講演でもありません。
            </p>
            <p>
              土浦のまちで行った2つのワークショップ──<br className="hidden md:block" />
              まちの音を採集する「サウンドピクニック」と、<br className="hidden md:block" />
              光の造形をつくる「光のまゆづくり」。<br className="hidden md:block" />
              そこで集まった音や光の素材を、<br className="hidden md:block" />
              東光寺の本堂という空間に「置く」試みです。
            </p>
            <p>
              ピアノ、サックス、録音された音、映像、布に投影された光──<br className="hidden md:block" />
              それらが本堂の空気と混ざり合い、<br className="hidden md:block" />
              ひとつの「場」を約30分間だけつくります。
            </p>
            <p>
              松井住職の読経から始まり、読経で終わる。<br className="hidden md:block" />
              寺の時間のなかに、まちの音と光をそっと置く。<br className="hidden md:block" />
              そういう夜です。
            </p>
          </motion.div>

          <motion.div {...stagger(0.3)}>
            <div className="w-10 h-px bg-amber-600/30 my-12" />
          </motion.div>

          <motion.div {...stagger(0.35)}>
            <div className="rounded-lg p-6 border border-slate-700/20" style={{ background: 'rgba(255,255,255,0.015)' }}>
              <p className="text-[14px] leading-[2] text-slate-400/70 italic" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                作品を持ち込むのではなく、「起きていない場所」に状況をつくる。<br />
                その場を、地域の人たちと一緒につくる。
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══ PHOTO BREAK ═══ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src="/tokoji/temple-quiet.jpg" alt="東光寺" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1628]/40 via-transparent to-[#0f1628]/80" />
      </section>


      {/* ═══ PROGRAM ═══ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fade}>
            <p className="text-amber-500/60 text-[10px] tracking-[0.4em] mb-6">PROGRAM</p>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif" }}
              className="text-[24px] md:text-[30px] font-light tracking-wide text-white/90 mb-4 leading-relaxed">
              演目
            </h2>
            <p className="text-slate-400/60 text-[13px] tracking-wider mb-14">
              上演時間：約30分 ＋ アフタートーク（15〜20分）
            </p>
          </motion.div>

          {/* program items */}
          <div className="space-y-0">

            {/* 1. 始まり */}
            <motion.div {...stagger(0.1)} className="relative pl-8 md:pl-12 pb-12 border-l border-slate-700/25">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-600/60 border-2 border-[#0f1628]" />
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-2">01</p>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif" }}
                className="text-[20px] md:text-[22px] font-light text-white/90 mb-3 tracking-wide">始まり</h3>
              <p className="text-[14px] leading-[1.9] text-slate-300/70">
                暗い本堂に、竹の音が鳴り響きます。<br />
                自然の音と共に、空間がゆっくりと目を覚ます。<br />
                日常の空気が、すこしずつ変わり始めます。
              </p>
            </motion.div>

            {/* 2. 読経 */}
            <motion.div {...stagger(0.15)} className="relative pl-8 md:pl-12 pb-12 border-l border-amber-700/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-700/60 border-2 border-[#0f1628]" />
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-2">02</p>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif" }}
                className="text-[20px] md:text-[22px] font-light text-white/90 mb-3 tracking-wide">読経</h3>
              <p className="text-[14px] leading-[1.9] text-slate-300/70">
                松井住職が本堂に入り、読経が始まります。<br />
                お経の声が空間に「時間の軸」を立てます。<br />
                ここから、寺の時間に入っていきます。
              </p>
            </motion.div>

            {/* 3. 境界1：光のまゆ */}
            <motion.div {...stagger(0.2)} className="relative pl-8 md:pl-12 pb-12 border-l border-amber-500/25">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500/50 border-2 border-[#0f1628]" />
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-2">03</p>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif" }}
                className="text-[20px] md:text-[22px] font-light text-white/90 mb-3 tracking-wide">
                境界 <span className="text-[16px] text-amber-400/60">一</span>
                <span className="text-[14px] text-slate-400/50 ml-3 font-sans tracking-wider">光のまゆ</span>
              </h3>
              <p className="text-[14px] leading-[1.9] text-slate-300/70">
                「光のまゆづくり」ワークショップで録音された音が、<br className="hidden md:block" />
                ピアノとサックスの生演奏と重なり合います。<br />
                布に投影される映像は、ワークショップの記録。<br />
                参加者の手から生まれた音と光が、本堂に広がっていきます。
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-[10px] text-slate-500/50 tracking-wider border border-slate-600/20 px-2.5 py-1 rounded-full">WS録音素材</span>
                <span className="text-[10px] text-slate-500/50 tracking-wider border border-slate-600/20 px-2.5 py-1 rounded-full">ピアノ</span>
                <span className="text-[10px] text-slate-500/50 tracking-wider border border-slate-600/20 px-2.5 py-1 rounded-full">サックス</span>
              </div>
            </motion.div>

            {/* 4. 境界2：サウンドピクニック */}
            <motion.div {...stagger(0.25)} className="relative pl-8 md:pl-12 pb-12 border-l border-violet-500/25">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500/50 border-2 border-[#0f1628]" />
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-2">04</p>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif" }}
                className="text-[20px] md:text-[22px] font-light text-white/90 mb-3 tracking-wide">
                境界 <span className="text-[16px] text-violet-400/60">二</span>
                <span className="text-[14px] text-slate-400/50 ml-3 font-sans tracking-wider">サウンドピクニック</span>
              </h3>
              <p className="text-[14px] leading-[1.9] text-slate-300/70">
                まちの音を採集する「サウンドピクニック」で録音された音。<br />
                自転車の音、風の音、まちの息づかい──<br />
                リズミックで、どこか楽しい世界が広がります。<br />
                映像もまた、そのときの風景です。
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-[10px] text-slate-500/50 tracking-wider border border-slate-600/20 px-2.5 py-1 rounded-full">フィールド録音</span>
                <span className="text-[10px] text-slate-500/50 tracking-wider border border-slate-600/20 px-2.5 py-1 rounded-full">まちの音</span>
              </div>
            </motion.div>

            {/* 5. 境界3：融合 */}
            <motion.div {...stagger(0.3)} className="relative pl-8 md:pl-12 pb-12 border-l border-amber-400/25">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-amber-400/50 border-2 border-[#0f1628] shadow-[0_0_8px_rgba(212,168,83,0.3)]" />
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-2">05</p>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif" }}
                className="text-[20px] md:text-[22px] font-light text-white/90 mb-3 tracking-wide">
                境界 <span className="text-[16px] text-amber-300/60">三</span>
                <span className="text-[14px] text-slate-400/50 ml-3 font-sans tracking-wider">融合</span>
              </h3>
              <p className="text-[14px] leading-[1.9] text-slate-300/70">
                ワークショップの音、まちの音、楽器の音、すべてが重なり合い、<br className="hidden md:block" />
                ひとつの新しい世界が本堂に立ち上がります。<br />
                日常の境界が溶け、ここにしかない時間が生まれます。
              </p>
            </motion.div>

            {/* 6. 読経（終） */}
            <motion.div {...stagger(0.35)} className="relative pl-8 md:pl-12 pb-4 border-l border-amber-700/20">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-700/60 border-2 border-[#0f1628]" />
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-2">06</p>
              <h3 style={{ fontFamily: "'Noto Serif JP', serif" }}
                className="text-[20px] md:text-[22px] font-light text-white/90 mb-3 tracking-wide">読経</h3>
              <p className="text-[14px] leading-[1.9] text-slate-300/70">
                再び松井住職の読経が響きます。<br />
                開かれた境界を、静かに閉じていく時間。<br />
                音が消え、光が消え、本堂に静寂だけが残ります。
              </p>
            </motion.div>

            {/* 静寂 */}
            <motion.div {...stagger(0.4)} className="relative pl-8 md:pl-12">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-500/30 border-2 border-[#0f1628]" />
              <p className="text-[14px] text-slate-500/40 italic" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                そして、静寂──
              </p>
            </motion.div>
          </div>

          {/* after talk */}
          <motion.div {...stagger(0.45)} className="mt-16">
            <div className="rounded-lg p-6 border border-slate-700/20" style={{ background: 'rgba(255,255,255,0.015)' }}>
              <p className="text-amber-500/60 text-[10px] tracking-[0.3em] mb-3">AFTER TALK</p>
              <p className="text-[15px] text-white/85 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                アフタートーク
              </p>
              <p className="text-[13px] leading-[1.9] text-slate-400/70">
                上演後、住職・演奏者・装飾を手がけた関ご夫妻を交えたトークを15〜20分ほど行います。<br />
                作品の背景や、この場で何が起きていたのかを、出演者と一緒に振り返る時間です。
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══ PHOTO BREAK 2 ═══ */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src="/tokoji/installation-2.jpg" alt="インスタレーション" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1628]/60 via-transparent to-[#0f1628]/80" />
      </section>


      {/* ═══ HOW TO EXPERIENCE ═══ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fade}>
            <p className="text-amber-500/60 text-[10px] tracking-[0.4em] mb-6">HOW TO EXPERIENCE</p>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif" }}
              className="text-[24px] md:text-[30px] font-light tracking-wide text-white/90 mb-10 leading-relaxed">
              体験のてびき
            </h2>
          </motion.div>

          <motion.div {...stagger(0.1)} className="space-y-10">

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-amber-500/40 text-[11px] tracking-[0.3em] font-mono">01</span>
                <h3 className="text-[17px] text-white/85" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  「聴く」ことに身をまかせてください
                </h3>
              </div>
              <p className="text-[14px] leading-[2] text-slate-300/70 pl-12">
                この作品では、音が主役です。<br />
                目を閉じても、開けていても構いません。<br />
                ただ、耳を少しだけ開いて、<br />
                周囲の空気に意識を向けてみてください。
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-amber-500/40 text-[11px] tracking-[0.3em] font-mono">02</span>
                <h3 className="text-[17px] text-white/85" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  何も「わかる」必要はありません
                </h3>
              </div>
              <p className="text-[14px] leading-[2] text-slate-300/70 pl-12">
                ストーリーを追う必要も、<br />
                意味を読み取る必要もありません。<br />
                音や光がどう感じられるか──<br />
                それだけで十分です。
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-amber-500/40 text-[11px] tracking-[0.3em] font-mono">03</span>
                <h3 className="text-[17px] text-white/85" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  静けさを一緒につくってください
                </h3>
              </div>
              <p className="text-[14px] leading-[2] text-slate-300/70 pl-12">
                上演中は、お静かにお過ごしください。<br />
                咳やわずかな物音も、この空間では「音」になります。<br />
                それも含めて、この場の一部です。<br />
                終演後、拍手は不要です。静寂の余韻をお楽しみください。
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-amber-500/40 text-[11px] tracking-[0.3em] font-mono">04</span>
                <h3 className="text-[17px] text-white/85" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  寺という場所を感じてください
                </h3>
              </div>
              <p className="text-[14px] leading-[2] text-slate-300/70 pl-12">
                東光寺の本堂は、何百年もの時間が積み重なった場所です。<br />
                木の匂い、空気の冷たさ、暗さ──<br />
                それらすべてが作品の一部です。<br />
                寺の空間そのものに、身を預けてみてください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══ PRACTICAL INFO ═══ */}
      <section className="py-20 md:py-28 px-6" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div {...fade}>
            <p className="text-amber-500/60 text-[10px] tracking-[0.4em] mb-6">INFORMATION</p>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif" }}
              className="text-[24px] md:text-[30px] font-light tracking-wide text-white/90 mb-12 leading-relaxed">
              ご来場にあたって
            </h2>
          </motion.div>

          <motion.div {...stagger(0.05)} className="mb-10">
            <div className="rounded-lg p-5 border border-amber-500/25" style={{ background: 'rgba(212,168,83,0.06)' }}>
              <p className="text-[14px] text-amber-200/90 leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                おかげさまで、お座席は満席となりました。<br />
                今後のご予約は<span className="text-white/90 font-medium">立ち見</span>でのご案内となります。ご了承ください。
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger(0.1)}>
            <div className="space-y-0 border-t border-slate-600/15">
              {[
                { q: '日時', a: '2026年2月23日（月・祝）開場 18:30 ／ 開演 19:00' },
                { q: '会場', a: '東光寺 本堂（茨城県土浦市）' },
                { q: '上演時間', a: '約30分 ＋ アフタートーク（15〜20分）' },
                { q: '座席', a: '座布団席です。足の不自由な方には椅子をご用意いたしますので、お気軽にお申し付けください' },
                { q: '携帯電話', a: 'マナーモードに設定をお願いいたします' },
                { q: '撮影', a: '開演前・アフタートーク中はOK ／ 上演中はご遠慮ください' },
                { q: '服装', a: '本堂内は暖房がありますが、冬の寺院です。暖かい服装でお越しください' },
                { q: '駐車場', a: '東光寺の駐車場をご利用いただけます（台数に限りがございます）' },
              ].map((item) => (
                <div key={item.q} className="flex flex-col md:flex-row md:items-baseline py-4 border-b border-slate-700/15 gap-1 md:gap-6">
                  <span className="text-[12px] text-amber-500/60 tracking-wider w-24 shrink-0">{item.q}</span>
                  <span className="text-[14px] text-slate-200/80 leading-relaxed">{item.a}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...stagger(0.3)} className="mt-12">
            <div className="rounded-lg p-6 border border-amber-600/15" style={{ background: 'rgba(212,168,83,0.03)' }}>
              <p className="text-[13px] leading-[1.9] text-amber-300/60">
                <span className="text-amber-400/70 mr-2">*</span>
                上演中は照明を落とし、暗い空間での体験となります。<br />
                <span className="text-amber-400/70 mr-2">*</span>
                基本的に座布団にお座りいただく形式です。足の不自由な方には椅子をご用意いたしますので、お気軽にお申し付けください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══ FLYER ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <motion.div {...fade}>
            <img src="/tokoji/flyer.jpg" alt="東光寺インスタレーション フライヤー" className="w-full rounded-lg shadow-2xl shadow-black/40" />
          </motion.div>
        </div>
      </section>


      {/* ═══ FOOTER ═══ */}
      <section className="py-16 px-6 border-t border-slate-700/15">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fade}>
            <div className="w-10 h-px bg-amber-600/25 mx-auto mb-8" />
            <p className="text-[13px] text-slate-400/50 leading-relaxed mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              皆さまのご来場を、心よりお待ちしております。
            </p>
            <div className="mt-10 space-y-1.5">
              <p className="text-[11px] text-slate-500/40 tracking-wider">企画：Beyond Boundary Music</p>
              <p className="text-[11px] text-slate-500/40 tracking-wider">協力：NPO法人まちづくり活性化土浦 ／ 土浦界隈まちづくり研究会</p>
              <p className="text-[10px] text-slate-500/30 tracking-wider mt-4">土浦市協働のまちづくりファンド認定事業</p>
              <p className="text-[10px] text-slate-500/30 tracking-wider">つちうらサウンド・アーカイブ・プロジェクト</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default TokojGuide;
