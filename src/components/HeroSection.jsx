import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative h-[360px] w-full">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Automate brand–creator deals end‑to‑end</h2>
            <p className="mt-2 text-slate-600">
              Upload contracts, generate tasks and payout rules, invite creators, and track performance — all in one place.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-3 py-1">Glass‑morphic fintech theme</span>
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-800 text-xs px-3 py-1">3D credit card scene</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
