function TopBar() {
  return (
    <div className="flex justify-between h-20 bg-slate-300 border-b border-slate-900/10">
      <div className="p-6">
        <h1 className="text-lg font-bold">Staffing Pro</h1>
      </div>
      <div className="p-4">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white p-2 rounded"
          onClick={() => alert('Not implemented!')}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default TopBar
