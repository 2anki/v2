defmodule Api2anki.Repo do
  use Ecto.Repo,
    otp_app: :api_2anki,
    adapter: Ecto.Adapters.Postgres
end
