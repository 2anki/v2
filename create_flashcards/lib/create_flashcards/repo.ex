defmodule CreateFlashcards.Repo do
  use Ecto.Repo,
    otp_app: :create_flashcards,
    adapter: Ecto.Adapters.Postgres
end
