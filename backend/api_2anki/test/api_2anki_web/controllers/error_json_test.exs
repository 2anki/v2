defmodule Api2ankiWeb.ErrorJSONTest do
  use Api2ankiWeb.ConnCase, async: true

  test "renders 404" do
    assert Api2ankiWeb.ErrorJSON.render("404.json", %{}) == %{errors: %{detail: "Not Found"}}
  end

  test "renders 500" do
    assert Api2ankiWeb.ErrorJSON.render("500.json", %{}) ==
             %{errors: %{detail: "Internal Server Error"}}
  end
end
