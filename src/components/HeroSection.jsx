import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative h-[300px] w-full">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Brand Dashboard</h2>
            <p className="mt-2 text-slate-600">
              Manage campaigns, deal groups, creator performance, and payouts with enterprise-grade clarity.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-3 py-1">Glass‑morphic fintech 3D</span>
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-800 text-xs px-3 py-1">Interactive scene</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
