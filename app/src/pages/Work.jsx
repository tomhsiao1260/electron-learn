export const Work = () => {
  const electron = window.electron;

  return (
    <>
      <div>This is work space</div>
      <div>The home director is @ {electron.homeDir()}</div>
      <div>The OS arch is @ {electron.osArch()}</div>
      <div>The OS version is @ {electron.osVersion()}</div>
    </>
  );
};
