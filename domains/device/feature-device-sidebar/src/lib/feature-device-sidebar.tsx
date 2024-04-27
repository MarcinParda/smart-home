export function FeatureDeviceSidebar() {
  return (
    <nav className="w-72 bg-slate-800 flex flex-col py-16 px-6">
      <div className="flex-1">
        <h2 className="pb-12">Home</h2>
        <ul className="pb-4">
          <li>Dashboard</li>
          <li>Settings</li>
        </ul>
        <div>
          <div>Rooms +</div>
          <ul>
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Kitchen</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex justify-center items-center w-12 h-12 bg-slate-900 rounded-full">
          N
        </div>
        <div className="flex justify-center items-center w-12 h-12 bg-slate-900 rounded-full">
          S
        </div>
      </div>
    </nav>
  );
}
