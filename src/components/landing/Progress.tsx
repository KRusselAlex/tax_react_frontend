const Progress = () => {
  return (
    <div>
      <div className="bg-[#f4f8fb] p-4 text-white flex-grow min-h-screen h-full flex justify-center items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-6 py-6">
          <div className="md:w-2/3 lg:w-1/2">
            <h2 className="my-8 text-2xl font-bold text-center md:text-left  text-gray-900 md:text-4xl">
              Our Commitments
            </h2>
            <p className="text-gray-900">
              Discover the values that drive our accounting agency to provide
              optimal service to our clients.
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y overflow-hidden rounded-3xl border text-gray-600 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="group relative bg-[#4f87a8] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  1. Efficiency
                </h5>
                <p className="text-white">
                  We optimize accounting management to ensure precise and rapid
                  results.
                </p>
              </div>
            </div>
            <div className="group relative bg-[#3d6d8c] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  2. Speed
                </h5>
                <p className="text-white">
                  We process your requests swiftly so you receive your documents
                  as quickly as possible.
                </p>
              </div>
            </div>
            <div className="group relative bg-[#325872] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  3. Punctuality
                </h5>
                <p className="text-white">
                  Meeting deadlines is our priority to ensure smooth management
                  for you.
                </p>
              </div>
            </div>
            <div className="group relative bg-[#2d4b5f] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <h5 className="text-xl font-semibold text-white transition">
                  4. Reliability
                </h5>
                <p className="text-white">
                  We guarantee transparent and secure financial management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Progress;
