namespace dotnet_store.Models;

public class SliderCreateModel
{
    public string? Baslik { get; set; }
    public string? Aciklama { get; set; }
    public IFormFile? Resim { get; set; } = null!;
    public int Index { get; set; }
    public bool Aktif { get; set; }
}

