// Decorative section divider: facing doves flanked by gold rules.
export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 py-8 ${className}`}>
      <span className="block h-px w-16 sm:w-24 bg-gold/50" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/doves.png"
        alt=""
        aria-hidden="true"
        width={120}
        height={89}
        className="w-24 sm:w-28 h-auto select-none"
      />
      <span className="block h-px w-16 sm:w-24 bg-gold/50" />
    </div>
  );
}
