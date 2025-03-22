

export const RecruitApp: React.FC = () => {
    return (
        /* h-screen  */
        <div className="bg-gray-100 text-gray-800">
            <TopNav />
            <BodyDiv />
            <BottomNav />
        </div>
    );
};


interface TopNavProps {
    isShow?: boolean
}
const TopNav: React.FC<TopNavProps> = ({ isShow }) => {
    if (isShow === false) return null;
    return (
        <div>
            {/* 顶部导航栏 */}
            <nav className="flex p-4 bg-white shadow-md">
                <button className="mr-4 text-blue-600">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <h1 className="text-2xl font-bold text-blue-600">RECRUIT AGENT</h1>
                </div>
            </nav>
        </div>
    )
}

interface BodyDivProps {
    isShow?: boolean
}
const BodyDiv: React.FC<BodyDivProps> = ({ isShow }) => {
    if (isShow === false) return null;
    return (
        <div className="bg-[rgb(230,233,255)]">
            <div className="p-4 space-y-6">
                {/* 閲覧済みセクション */}
                <div className="bg-white rounded-2xl shadow-md p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-500">閲覧済み</h2>
                        <button className="text-blue-600 text-2xl font-bold">全10件 &gt;</button>
                    </div>

                    {/* 求人情報カード（繰り返し部分） */}
                    <div className="border-t pt-4">
                        <div className="flex justify-between">
                            <div className="bg-gray-200 p-4 rounded-2xl shadow-md">
                                <p className="text-sm text-gray-600 mb-1">(株) 国際エキスプレス</p>
                                <h3 className="text-base font-bold text-blue-600  mb-2">
                                    中国語を活かす【国際物流の営業】国際色豊かな総合物流企業/越境EC物流に強み
                                </h3>
                                <div className="text-sm text-gray-600">
                                    <p>
                                        <span className="mr-1">📍</span>
                                        <span>勤務地</span>
                                        <span className="ml-2 text-gray-500">東京都品川区</span>
                                    </p>
                                    <p>
                                        <span className="mr-1">💰</span>
                                        <span>年収</span>
                                        <span className="ml-2 text-gray-500">330万〜400万</span>
                                    </p>
                                    <div className='flex justify-end'>
                                        <span className="text-gray-400">★</span>
                                    </div>
                                </div>
                            </div>
                            {/* Star Icon (Placeholder - Replace with actual SVG or icon library) */}
                        </div>

                    </div>
                    {/* 他の求人情報カードは省略 */}
                    {/* 2nd card (simplified) */}
                    <div className="border-t pt-4 mt-2">
                        <div className="flex justify-between">
                            <div className="bg-gray-200 p-4 rounded-2xl shadow-md">
                                <p className="text-sm text-gray-600 mb-1">(株) ゼンショーホールディングス</p>
                                <h3 className="text-base font-bold  text-blue-600  mb-2">
                                    【東京】ユーザー/店舗/本部部門の課題を解決！外食業界大手の社内SE/ITコンサルタント
                                </h3>
                                <div className="text-sm text-gray-600">
                                    <p>
                                        <span className="mr-1">📍</span>
                                        <span>勤務地</span>
                                        <span className="ml-2">東京都港区</span>
                                    </p>
                                    <p>
                                        <span className="mr-1">💰</span>
                                        <span>年収</span>
                                        <span className="ml-2">400万〜</span>
                                    </p>
                                    <div className='flex justify-end'>
                                        <span className="text-gray-400">★</span>
                                    </div>
                                </div>

                            </div>
                            {/* Star Icon (Placeholder - Replace with actual SVG or icon library) */}

                        </div>
                    </div>
                </div>

                {/* 応募件数カード */}
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <h2 className="text-xl font-bold text-gray-600 mb-2">現在までの応募件数</h2>

                    <div className="flex justify-center">
                        <p className="text-6xl text-blue-600">108</p>
                        <div className="flex items-end">
                            <p className="text-left text-xl font-bold text-blue-600 p-2">件</p>
                        </div>
                    </div>

                </div>

                {/* 応募しない求人一覧ボタン */}
                <div className="flex justify-end">
                    <button type="button" className="mt-2 text-blue-600 text-xl font-bold hover:bg-blue-100 px-2 py-1 rounded">
                        応募しない求人一覧
                        <span className="ml-1">&gt;</span>
                    </button>
                </div>
            </div>


            <div className="p-4">
                {/* 标题 */}
                <h1 className="text-xl font-bold mb-4 flex items-center">
                    選考ステータス
                    {/* 感叹号图标，用简单的圆圈代替 */}
                    <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-xs">
                        !
                    </span>
                </h1>

                {/* 卡片网格 */}
                <div className="grid grid-cols-3 gap-4">
                    {/* 申请済みセミナー */}
                    <div className="opacity-50 bg-white p-6 rounded-2xl shadow-lg text-center">
                        <h2 className="text-sm text-gray-600 mb-2">申込済みセミナー</h2>
                        <div className="flex justify-center">
                            <p className="text-5xl text-blue-600">0</p>
                            <div className="flex items-end">
                                <p className="text-left text-xl text-blue-600 p-1">件</p>
                            </div>
                        </div>
                    </div>

                    {/* 書類通過 */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <h2 className="text-sm text-gray-600 mb-2">書類通過</h2>
                        <div className="flex justify-center">
                            <p className="text-5xl text-blue-600">1</p>
                            <div className="flex items-end">
                                <p className="text-left text-xl text-blue-600 p-1">件</p>
                            </div>
                        </div>
                    </div>

                    {/* 面接選考 */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <h2 className="text-sm text-gray-600 mb-2">面接選考</h2>
                        <div className="flex justify-center">
                            <p className="text-5xl text-blue-600">1</p>
                            <div className="flex items-end">
                                <p className="text-left text-xl text-blue-600 p-1">件</p>
                            </div>
                        </div>
                    </div>

                    {/* 内定 */}
                    <div className="opacity-50 bg-white p-6 rounded-2xl shadow-lg text-center">
                        <h2 className="text-sm text-gray-600 mb-2">内定</h2>
                        <div className="flex justify-center">
                            <p className="text-5xl text-blue-600">0</p>
                            <div className="flex items-end">
                                <p className="text-left text-xl text-blue-600 p-1">件</p>
                            </div>
                        </div>
                    </div>

                    {/* 選考終了 */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
                        <h2 className="text-sm mb-2">選考終了</h2>
                        <div className="flex justify-center">
                            <p className="text-5xl text-blue-600">100</p>
                            <div className="flex items-end">
                                <p className="text-left text-xl text-blue-600 p-1">件</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  "応募しない求人一覧" 按钮  */}
                {/* <div className="mt-4 text-center"> */}
                {/* <button className="text-blue-600 text-sm">応募しない求人一覧 ></button> */}
                {/* </div> */}
            </div>

        </div>
    )
}


interface BottomNavProps {
    isShow?: boolean
}
const BottomNav: React.FC<BottomNavProps> = ({ isShow }) => {
    if (isShow === false) return null;
    return (
        <div>
            {/* 底部导航栏 */}
            <nav className="fixed sticky bottom-0 w-full bg-white shadow-md p-2 flex justify-around items-center">
                <div className="text-center">
                    <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-xs text-gray-600">ホーム</p>
                </div>
                <div className="text-center">
                    <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-xs text-gray-600">求人POST</p>
                </div>
                <div className="text-center">
                    <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-xs text-gray-600">求人検索</p>
                </div>
                <div className="text-center">
                    <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <p className="text-xs text-gray-600">気になる</p>
                </div>
                <div className="text-center">
                    <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="True" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-600">メール</p>
                </div>
            </nav>
        </div>)
}