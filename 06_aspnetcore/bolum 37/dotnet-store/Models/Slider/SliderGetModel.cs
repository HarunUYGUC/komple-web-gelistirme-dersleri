namespace dotnet_store.Models;

// model
public class SliderGetModel
{
    public int Id { get; set; }
    public string? Baslik { get; set; }
    public string Resim { get; set; } = null!;
    public int Index { get; set; }
    public bool Aktif { get; set; }
}

