using System.ComponentModel.DataAnnotations;

namespace dotnet_store.Models;

public class AccountChangePasswordModel
{
    [Required]
    [Display(Name = "Mevcut Parola")]
    [DataType(DataType.Password)]
    public string OldPassword { get; set; } = null!;

    [Required]
    [Display(Name = "Yeni Parola")]
    [DataType(DataType.Password)]
    public string Password { get; set; } = null!;

    [Required]
    [Display(Name = "Yeni Parola Tekrar")]
    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Parola eşleşmiyor")]
    public string ConfirmPassword { get; set; } = null!;
}