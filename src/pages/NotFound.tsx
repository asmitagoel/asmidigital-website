import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container className="text-center">
        <p className="font-display text-7xl text-brand-300">404</p>
        <h1 className="font-display mt-4 text-3xl text-brand-950">
          This page doesn't exist
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-brand-900/65">
          The page you're looking for may have moved. Let's get you back on track.
        </p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </Container>
    </section>
  )
}
