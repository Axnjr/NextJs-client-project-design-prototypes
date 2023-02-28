import Link from 'next/link'

export default function Header({ Children }) {

  return (
    <>
        <header>
            <p className="logo">Exponential©</p>
            <nav className="nav">
                <p><Link href="/">Home</Link></p>
                <p><Link href="/job">Jobs</Link></p>
                <p><Link href="/waitList">WaitList</Link></p>
            </nav>
        </header>
        <main>{Children}</main>
    </>
  )
}
