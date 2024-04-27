import { FeatureDeviceSidebar } from '@smart-home/feature-device-sidebar';

export function FeatureDeviceDashboard() {
  return (
    <div className="min-h-screen w-full flex text-white">
      <FeatureDeviceSidebar />
      <main className="flex-1 bg-slate-800">Device Dashboard</main>
      <aside className="absolute bg-slate-900 w-[450px] right-12 top-12 bottom-12 max-h-[850px]">
        Device settings
      </aside>
    </div>
  );
}
export default FeatureDeviceDashboard;
