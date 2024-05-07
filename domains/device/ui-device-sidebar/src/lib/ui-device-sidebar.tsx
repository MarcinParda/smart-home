import { ButtonIconLink } from '../components/ButtonIconLink/ButtonIconLink';

export function UiDeviceSidebar() {
  return (
    <nav className="w-72 bg-gray-500 flex flex-col py-16 px-6">
      <div className="flex-1">
        <h2 className="pb-12">Home</h2>
        <ul className="pb-4">
          <li>
            <ButtonIconLink href="/" icon="@" isActive>
              Dashboard
            </ButtonIconLink>
          </li>
          <li>
            <ButtonIconLink href="/notifications" icon="@">
              Settings
            </ButtonIconLink>
          </li>
        </ul>
        <div>
          <div>Rooms +</div>
          <ul>
            <li>
              <ButtonIconLink href="/settings" icon="@">
                Kitchen
              </ButtonIconLink>
            </li>
            <li>
              <ButtonIconLink href="/settings" icon="@">
                Living Room
              </ButtonIconLink>
            </li>
            <li>
              <ButtonIconLink href="/settings" icon="@">
                Bedroom
              </ButtonIconLink>
            </li>
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
