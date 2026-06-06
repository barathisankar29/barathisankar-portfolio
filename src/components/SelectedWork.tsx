export default function SelectedWork() {
  return (
    <section className="bg-[#0F2747] text-[#F5F1E8] py-32">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-6">
          Selected Work
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Featured
          <br />
          Projects
        </h2>

        {/* Project Card */}

        <div className="rounded-[32px] overflow-hidden bg-[#173459]">

          <div className="aspect-video bg-[#1e3e68]" />

          <div className="p-8">

            <h3 className="text-3xl font-bold">
              Crowd Density Dashboard
            </h3>

            <p className="mt-4 text-white/70 max-w-xl">
              AI-powered crowd density monitoring and
              prediction dashboard built using YOLO,
              OpenCV and Flask.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}