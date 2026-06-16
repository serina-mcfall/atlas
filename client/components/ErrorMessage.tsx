interface Props {
  error?: unknown
}

export default function ErrorMessage({ error }: Props) {
  const detail = error != undefined ? `: ${String(error)}` : ''
  return (
    <p role="alert" style={{ color: 'var(--text-muted)' }}>
      Oops! Something went wrong{detail}
    </p>
  )
}
