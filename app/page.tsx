"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bitcoin,
  Coins,
  Copy,
  Gamepad2,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const TELEGRAM = "https://t.me/YOUR_TELEGRAM";

const cryptoRows = ["BTC +2.4%", "ETH +1.8%", "USDT 1.00", "BNB +3.1%", "SOL +5.2%"];

const scanners = [
  {
    title: "MetaMask",
    image: "/metamask-scanner.jpg",
    desc: "MetaMask mobile app scanner",
    color: "border-emerald-400/40",
    badge: "bg-emerald-400/15 text-emerald-300",
    feature: "Best for MetaMask mobile wallet users",
  },
  {
    title: "Universal / DApp URL",
    image: "/universal-scanner.jpg",
    desc: "Binance Wallet / SafePal / TokenPocket",
    color: "border-blue-400/40",
    badge: "bg-blue-400/15 text-blue-300",
    feature: "Works with Binance Wallet, SafePal, TokenPocket",
  },
  {
    title: "Trust Wallet",
    image: "/trustwallet-scanner.jpg",
    desc: "TrustWallet home scanner se scan karein",
    color: "border-yellow-400/40",
    badge: "bg-yellow-400/15 text-yellow-300",
    feature: "Best for Trust Wallet mobile app users",
  },
];

export default function Home() {
  const [scannerOpen, setScannerOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <style>{`
        @keyframes moveTicker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-22px) rotate(12deg); } }
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 80px 80px; } }
        @keyframes glow { 0%,100% { box-shadow: 0 0 35px #00e5ff55; } 50% { box-shadow: 0 0 90px #8b5cf655; } }
        .ticker { animation: moveTicker 18s linear infinite; }
        .float { animation: float 4s ease-in-out infinite; }
        .crypto-grid {
          background-image:
            linear-gradient(rgba(0,229,255,.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,.11) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridMove 8s linear infinite;
        }
        .glow { animation: glow 3s ease-in-out infinite; }
      `}</style>

      <div className="fixed inset-0 -z-10 bg-[#050816]">
        <div className="absolute inset-0 crypto-grid opacity-30" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-3xl" />
      </div>

      <div className="overflow-hidden border-b border-cyan-400/20 bg-black/50 py-2">
        <div className="ticker flex w-[200%] gap-8 text-sm font-bold text-cyan-300">
          {[...cryptoRows, ...cryptoRows, ...cryptoRows, ...cryptoRows].map((x, i) => (
            <span key={i}>● {x}</span>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#050816]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="float rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 p-3">
              <Bitcoin />
            </div>
            <div>
              <p className="text-xl font-black">CryptoBoost OTC</p>
              <p className="text-xs text-emerald-300">Verified Crypto Seller</p>
            </div>
          </div>

          <a href={TELEGRAM} target="_blank" className="rounded-xl bg-cyan-400 px-4 py-2 font-black text-black">
            Telegram
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
            <BadgeCheck size={16} /> Verified OTC Desk
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-7xl">
            Real Crypto Deals For{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              USDT Buyers
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-300">
            Dedicated crypto seller website for USDT, BTC, ETH, gaming platform crypto support,
            multi-chain transfers, and Telegram deal management.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              href={TELEGRAM}
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 font-black text-black"
            >
              Start Crypto Deal <ArrowRight />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setScannerOpen(true)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-white/10 px-7 py-4 font-black backdrop-blur"
            >
              <QrCode />
              Connect Wallet & Get Reward
            </motion.button>
          </div>
        </div>

        <div className="glow rounded-[2rem] border border-cyan-400/30 bg-black/40 p-5 backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-[#07111f] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-gray-400">Live Seller Terminal</p>
                <h3 className="text-3xl font-black">OTC Market</h3>
              </div>
              <Wallet className="text-cyan-300" size={42} />
            </div>

            {[
              ["USDT", "TRC20 / ERC20 / BEP20", "Available"],
              ["BTC", "Bitcoin Network", "Available"],
              ["ETH", "ERC20 Network", "Available"],
              ["Gaming USDT", "Stake-style platform support", "Enquiry"],
            ].map(([coin, chain, status]) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={coin}
                className="mb-4 rounded-2xl border border-cyan-400/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-black text-cyan-300">{coin}</h4>
                    <p className="text-sm text-gray-400">{chain}</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    {status}
                  </span>
                </div>
              </motion.div>
            ))}

            <button
              onClick={() => setScannerOpen(true)}
              className="mt-3 flex w-full justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-white/10 px-6 py-4 font-black"
            >
              <QrCode /> Connect Wallet
            </button>

            <a href={TELEGRAM} target="_blank" className="mt-3 flex justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black">
              <MessageCircle /> Contact Seller
            </a>
          </div>
        </div>
      </section>

      <section id="coins" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-center text-4xl font-black sm:text-5xl">Crypto Dedicated Services</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Coins, "USDT Supply", "TRC20, ERC20, BEP20"],
            [Bitcoin, "BTC Deals", "Bitcoin network support"],
            [Wallet, "Wallet Transfer", "Multi-chain crypto transfer"],
            [Gamepad2, "Gaming Platforms", "USDT for Stake-style platforms"],
          ].map(([Icon, title, text]: any) => (
            <motion.div
              whileHover={{ y: -10, scale: 1.04 }}
              key={title}
              className="rounded-3xl border border-cyan-400/20 bg-[#07111f]/80 p-6 backdrop-blur-xl"
            >
              <Icon className="text-cyan-300" size={38} />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 text-gray-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <ShieldCheck className="mx-auto text-emerald-300" size={52} />
        <h2 className="mt-4 text-4xl font-black">Start With Verified Seller Support</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Real crypto enquiry only. No fake tokens, no guaranteed profit, no financial advice.
        </p>

        <a href={TELEGRAM} target="_blank" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 font-black text-black">
          <Zap /> Open Telegram
        </a>
      </section>

      {scannerOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/85 px-4 py-8 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative mx-auto max-w-6xl rounded-[2rem] border border-cyan-400/30 bg-[#07111f] p-5 shadow-2xl shadow-cyan-500/20 sm:p-8"
          >
            <button
              onClick={() => setScannerOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-black">
                <QrCode size={34} />
              </div>

              <h2 className="text-3xl font-black sm:text-5xl">Connect Wallet</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Select your wallet scanner and scan QR code. Never share seed phrase,
                private key, OTP, or wallet password with anyone.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {scanners.map((scanner) => (
                <motion.div
                  key={scanner.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-[1.8rem] border ${scanner.color} bg-[#eef2fb] p-4 text-center text-black shadow-xl`}
                >
                  <div className={`mx-auto mb-4 inline-flex rounded-full px-4 py-2 text-sm font-black ${scanner.badge}`}>
                    {scanner.title}
                  </div>

                  <div className="rounded-3xl bg-white p-3">
                    <img
                      src={scanner.image}
                      alt={scanner.title}
                      className="mx-auto h-64 w-full rounded-2xl object-contain"
                    />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-gray-700">{scanner.desc}</p>
                  <p className="mt-2 text-xs text-gray-500">{scanner.feature}</p>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#d8d9e8] px-4 py-3 font-semibold text-gray-700">
                    <Copy size={17} /> Copy Link
                  </button>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setScannerOpen(false)}
              className="mt-8 w-full rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black"
            >
              Close Scanner
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}