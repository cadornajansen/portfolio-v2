export function SiteBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      {/* Base */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Gradient light spots */}
      <div className="absolute top-[-140px] left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.075] blur-[96px]" />
      <div className="absolute top-[260px] left-[-200px] h-[460px] w-[560px] rounded-full bg-blue-500/[0.07] blur-[104px]" />
      <div className="absolute top-[420px] right-[-220px] h-[500px] w-[620px] rounded-full bg-violet-500/[0.06] blur-[112px]" />
      <div className="absolute bottom-[180px] left-[22%] h-[360px] w-[480px] rounded-full bg-cyan-400/[0.05] blur-[104px]" />
      <div className="absolute right-[18%] bottom-[-240px] h-[500px] w-[620px] rounded-full bg-white/[0.045] blur-[112px]" />

      {/* Grid revealed only by gradient masks */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)]
            bg-[size:84px_84px]
            [mask-image:radial-gradient(circle_at_50%_18%,black_0%,transparent_34%),radial-gradient(circle_at_10%_40%,black_0%,transparent_28%),radial-gradient(circle_at_90%_48%,black_0%,transparent_30%)]
            [mask-composite:add]
            [-webkit-mask-image:radial-gradient(circle_at_50%_18%,black_0%,transparent_34%),radial-gradient(circle_at_10%_40%,black_0%,transparent_28%),radial-gradient(circle_at_90%_48%,black_0%,transparent_30%)]
            [-webkit-mask-composite:source-over]
          "
        />
      </div>

      {/* Bigger faint grid, also masked */}
      <div
        className="
          hidden md:block
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-[size:336px_336px]
          opacity-40
          [mask-image:radial-gradient(circle_at_50%_18%,black_0%,transparent_38%),radial-gradient(circle_at_90%_48%,black_0%,transparent_34%),radial-gradient(circle_at_28%_78%,black_0%,transparent_30%)]
          [mask-composite:add]
          [-webkit-mask-image:radial-gradient(circle_at_50%_18%,black_0%,transparent_38%),radial-gradient(circle_at_90%_48%,black_0%,transparent_34%),radial-gradient(circle_at_28%_78%,black_0%,transparent_30%)]
          [-webkit-mask-composite:source-over]
        "
      />

      {/* Soft darkening so grid doesn't overpower content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.18)_42%,#080808_100%)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.18),transparent_22%,transparent_70%,rgba(8,8,8,0.72))]" />
    </div>
  )
}
